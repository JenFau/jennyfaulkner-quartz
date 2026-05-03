---
publish: true
created: 2025-07-09
modified: 2025-10-27
---

Googlescript in Google Sheets

```
function fetchOpenAIChangelog() {

  const feedUrl = "https://openai.com/blog/rss.xml";
  const sheetName = "OpenAI Feed";
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  const response = UrlFetchApp.fetch(feedUrl);
  const xml = response.getContentText();
  const document = XmlService.parse(xml);
  const items = document.getRootElement()
                        .getChild("channel")
                        .getChildren("item");
  const newRows = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const title = item.getChildText("title");
    const link = item.getChildText("link");
    const pubDate = new Date(item.getChildText("pubDate"));
    const description = item.getChildText("description");

    // Check if this link already exists in the sheet
    const existingLinks = sheet.getRange("D2:D" + sheet.getLastRow()).getValues().flat();
    if (existingLinks.includes(link)) continue;
    newRows.push([pubDate, "OpenAI", title, link, description]);
  }
  if (newRows.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, newRows.length, 5).setValues(newRows);
  }
}
```
