// 因為是以外部引入的方式使用套件，因此需要做環境設定
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://mozilla.github.io/pdf.js/build/pdf.worker.js";
//console.log(pdfjsLib);
// 參數的部份請先將 PDF 放入專案資料夾內，並寫入路徑
// pdfjsLib.getDocument("./sample.pdf").promise.then((doc) => {
//   console.log(doc);
//   doc.getPage(1).then((page) => {
//     console.log(page);
//     // 設定 PDF 內容的顯示比例
//     const viewport = page.getViewport({ scale: 1 });
//     // 設定 canvas 的大小與 PDF 相等
//     canvas.width = viewport.width;
//     canvas.height = viewport.height;

//     //實際渲染 PDF
//     page.render({
//       canvasContext: ctx,
//       viewport: viewport
//     });
//   });
// });
async function renderPDF(data) {
  const pdfDoc = await pdfjsLib.getDocument(data).promise;
  const pdfPage = await pdfDoc.getPage(1);
  const viewport = pdfPage.getViewport({ scale: 1 });
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  pdfPage.render({
    canvasContext: ctx,
    viewport: viewport
  });
}

renderPDF("./sample.pdf");
