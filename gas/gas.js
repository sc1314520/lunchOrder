var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName("工作表1");
var result;

function doPost(e) {
  var param = e.parameter;
      var flag =param.flag;
      var name = param.name;
      var num = param.num;
      var m1 = param.m1;
      var m2 = param.m2;
      var m3 = param.m3;
      var m4 = param.m4;
      var time =param.time
      var ta = param.ta;
  
  // 刪除資料
    if(flag=="1"){
      var range = sheet.getRange("A3:A");
      var data =sheet.getDataRange().getValues();
      var name = param.name;
      var row;
      for(var i=0;i<data.length;i++){
        if(data[i][0]==name){
          row = i;
          sheet.deleteRow(i+1);
          break;
        }
      }
    }
    // 新增資料
    else{ 
      console.log("成功");
      sheet.appendRow([name,num,m1,m2,m3,m4,time,ta]);
      return ContentService.createTextOutput('success');
    }
  
}

// 查詢資料
function doGet(){
  var id = '1hYmpLg02RW5y-bgSs7e6_o-KvLzwH4I71bKVde31UhQ'; // 前一段取得的 Sheet id
  var spreadsheet = SpreadsheetApp.openById(id); // Sheet id
  var sheet = spreadsheet.getSheets()[0]; // 要第幾個sheet？ 0 就是第一個
  var data = sheet.getDataRange().getValues(); // 取得的資料
  
  var dataExport = {};
  for(var i = 2; i < data.length; i++) {
    
    var state;
    data[i][0] !== '' ? state = data[i][0] : state = data[i][1]; 
    
    dataExport[state] = {
      name: data[i][0],
      num: data[i][1],
      m1: data[i][2],
      m2: data[i][3],
      m3: data[i][4],
      m4: data[i][5],
      time: data[i][6],
      ta: data[i][7],
    }  
  }

  console.log(dataExport);
  var dataExportFormat = JSON.stringify(dataExport);
  console.log(ContentService.createTextOutput(dataExportFormat).setMimeType(ContentService.MimeType.JSON))
  return ContentService.createTextOutput(dataExportFormat).setMimeType(ContentService.MimeType.JSON);

  
    
}

