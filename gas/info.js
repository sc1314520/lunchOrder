function doGet(e) {
    var url = 'https://docs.google.com/spreadsheets/d/1_ybRfgqd_PDCiqXUnL1dIFDTvowXvFtvs-q-wdCgwCM/edit#gid=0';
    var name = '工作表1'
    var SpreadSheet = SpreadsheetApp.openByUrl(url);
    var SheetName = SpreadSheet.getSheetByName(name);
    var info = SheetName.getSheetValues(1,1,1,1);
  
    var result ={
      info:info
    }
    console.log(result);
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }