const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  // 更多参数：https://www.electronjs.org/zh/docs/latest/api/browser-window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    devTools: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  win.on("show", () => {
    win.webContents.openDevTools();
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:8080/home");
  } else {
    win.loadFile(path.join(app.getAppPath(), "home.html"));
  }
}

ipcMain.on("win:click", () => {
  console.log("test");
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
