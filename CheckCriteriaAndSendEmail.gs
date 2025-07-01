
var spreadsheetId = "xyz"; // Replace with your actual spreadsheet ID
var spreadsheet = SpreadsheetApp.openById(spreadsheetId); // Opens the spreadsheet using the provided ID
var sheet = spreadsheet.getSheets()[0]; // Gets the first sheet in the spreadsheet (adjust the index if needed)
var range = sheet.getRange("A1"); // Defines the specific cell (A1) to monitor for changes
var threshold = .04; // Set the threshold value for comparison

function CheckCriteriaAndSendEmail() {
    SpreadsheetApp.flush(); // Refreshes formulas to ensure the latest values are retrieved
    var value = range.getValue(); // Gets the current value of the specified cell (A1)
    var emailAddress = "email@email.com"; // Replace with your email address to receive notifications
    var subject = "Your Model Found an Edge"; // Subject line for the email notification
    var message = "Your model found an edge > 4.0%. Current Value: " + value; // Message body of the email, including the current value
    var rangeValues = sheet.getRange("B2:B16").getDisplayValues(); // Retrieves the displayed values from the range B2:B16
    Logger.log("Range values: " + rangeValues); // Logs the range values for debugging
    Logger.log("Current value: " + value); // Logs the current value of the monitored cell for debugging
    if (value > threshold) { // Checks if the value in A1 exceeds the specified threshold
        MailApp.sendEmail(emailAddress, subject, message); // Sends an email notification if the condition is met
    }
}
