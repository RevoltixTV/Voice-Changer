// Voice Carnage – Electron-Hülle (Mikrofon erlauben, Audio ohne Klick starten)
const { app, BrowserWindow, session, Menu } = require("electron");
app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");
app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((wc, perm, cb) => cb(["media", "audioCapture"].includes(perm)));
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({ width: 1280, height: 900, backgroundColor: "#0D1117", title: "Voice Carnage", autoHideMenuBar: true });
  win.loadFile("index.html");
});
app.on("window-all-closed", () => app.quit());
