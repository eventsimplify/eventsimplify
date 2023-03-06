"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduler = exports.generatePdf = void 0;
const puppeteer_core_1 = __importDefault(require("puppeteer-core"));
const node_schedule_1 = __importDefault(require("node-schedule"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// let osArch = process.arch; //this will return arm or x64
// let chromiumPath;
// if (arch === 'arm') {
//   chromiumPath = '/path/to/chromium-arm';
// } else {
//   chromiumPath = '/path/to/chromium-x86';
// }
const generatePdf = () => __awaiter(void 0, void 0, void 0, function* () {
    const html = fs_1.default.readFileSync(path_1.default.join(__dirname, 'index.html'), 'utf8');
    const browser = yield puppeteer_core_1.default.launch({
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        // other options as needed
    });
    const page = yield browser.newPage();
    yield page.setContent(html);
    const pdf = yield page.pdf({
        format: 'A2',
        printBackground: true,
    });
    yield browser.close();
    return pdf;
});
exports.generatePdf = generatePdf;
const scheduler = () => __awaiter(void 0, void 0, void 0, function* () {
    // 1 minute from now
    const date = new Date(Date.now() + 60000);
    const job = node_schedule_1.default.scheduleJob('date-schedule', '* * * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('I am running a task every minute');
    }));
    node_schedule_1.default.cancelJob('date-schedule');
});
exports.scheduler = scheduler;
//# sourceMappingURL=index.js.map