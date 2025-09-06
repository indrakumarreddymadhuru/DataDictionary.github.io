async function loadExcel(filePath, containerId) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to fetch ${filePath}`);
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const html = XLSX.utils.sheet_to_html(sheet);
    document.getElementById(containerId).innerHTML = html;
  } catch (err) {
    document.getElementById(containerId).innerHTML = `<p style="color:red;">Error loading file: ${err.message}</p>`;
  }
}
