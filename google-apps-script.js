/**
 * Google Apps Script for Contact Form Submission
 * 
 * Instructions:
 * 1. Go to https://script.google.com
 * 2. Click "New Project"
 * 3. Replace the default code with this script
 * 4. Update the SPREADSHEET_ID with your Google Sheet ID
 * 5. Save the project
 * 6. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy"
 *    - Copy the Web App URL and use it as VITE_GOOGLE_SCRIPT_URL
 * 
 * Google Sheet Setup:
 * 1. Create a new Google Sheet
 * 2. In the first row, add these headers: Timestamp, Name, Email, Phone, Message
 * 3. Copy the Sheet ID from the URL (the long string between /d/ and /edit)
 * 4. Paste it in the SPREADSHEET_ID variable below
 */

// Replace with your Google Sheet ID (found in the sheet URL)
const SPREADSHEET_ID = '1ZRs_QruOWwRSt6GRIFiZ2C1sBS87zmv9FoV7L8FxxAA';

// Sheet name (default is 'Sheet1', change if needed)
const SHEET_NAME = 'Website Response Sheet';

/**
 * Handle POST request from the contact form
 */
function doPost(e) {
  try {
    let data;
    
    // Try to parse JSON first
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonError) {
        // If JSON parsing fails, try to get form parameters
        data = {
          name: e.parameter.name || '',
          email: e.parameter.email || '',
          phone: e.parameter.phone || '',
          message: e.parameter.message || '',
          timestamp: e.parameter.timestamp || new Date().toISOString()
        };
      }
    } else if (e.parameter) {
      // Handle form-encoded data
      data = {
        name: e.parameter.name || '',
        email: e.parameter.email || '',
        phone: e.parameter.phone || '',
        message: e.parameter.message || '',
        timestamp: e.parameter.timestamp || new Date().toISOString()
      };
    } else {
      throw new Error('No data received');
    }
    
    // Log the received data (check Executions tab in Apps Script)
    console.log('Received data:', data);
    
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
    }
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
    }
    
    // Append the form data to the sheet
    const timestamp = data.timestamp || new Date().toISOString();
    const name = (data.name || '').toString().trim();
    const email = (data.email || '').toString().trim();
    const phone = (data.phone || '').toString().trim();
    const message = (data.message || '').toString().trim();
    
    sheet.appendRow([timestamp, name, email, phone, message]);
    
    // Log success
    console.log('Data appended successfully');
    
    // Return success response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({ 
      success: true, 
      message: 'Form submitted successfully' 
    }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error (check Executions tab in Apps Script)
    console.error('Error in doPost:', error);
    
    // Return error response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString(),
      message: 'Failed to process form submission'
    }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET request (for testing)
 */
function doGet(e) {
  // Test function - try to write to sheet
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ 
        message: 'Sheet not found',
        sheetName: SHEET_NAME,
        status: 'error'
      }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ 
      message: 'Contact Form API is running',
      sheetName: SHEET_NAME,
      lastRow: sheet.getLastRow(),
      status: 'ok'
    }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      message: 'Error: ' + error.toString(),
      status: 'error'
    }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

