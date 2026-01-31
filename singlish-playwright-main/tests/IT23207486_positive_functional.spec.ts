import { test, expect } from "@playwright/test";

// Increase navigation timeout for all tests in this file
test.use({ navigationTimeout: 60000 });

const testCases = [
  {
    id: "Pos_Fun_0001",
    name: "Greeting phrase",
    input: "mama udheema gedhara yanavaa.",
    expected: "මම උදේම ගෙදර යනවා.",
  },
  {
    id: "Pos_Fun_0002",
    name: "Mixed-language input",
    input: "mama kaeema kaeevata passe paadam karalama TV balannavaa.",
    expected: "මම කෑම කෑවට පස්සෙ පාඩම් කරලම TV බලන්නවා.",
  },
  {
    id: "Pos_Fun_0003",
    name: "Short request",
    input: "oya enna mama maGA ena gaman innee mama ikmanata ennan.",
    expected: "ඔය එන්න මම මඟ එන ගමන් ඉන්නේ මම ඉක්මනට එන්නන්.",
  },
  {
    id: "Pos_Fun_0004",
    name: "Simple sentence",
    input: "suba udhaeesanak veevaa.",
    expected: "සුබ උදෑසනක් වේවා.",
  },
  {
    id: "Pos_Fun_0005",
    name: "Compound sentence",
    input: "oyaa heta gama paeththe yanavadha ?",
    expected: "ඔයා හෙට ගම පැත්තෙ යනවද ?",
  },
  {
    id: "Pos_Fun_0006",
    name: "Question sentence",
    input: "eyaata kiyanna eka hoDHAyi.",
    expected: "එයාට කියන්න එක හොඳයි.",
  },
  {
    id: "Pos_Fun_0007",
    name: "Imperative",
    input: "mama iiye gedhara giyaa.",
    expected: "මම ඊයෙ ගෙදර ගියා.",
  },
  {
    id: "Pos_Fun_0008",
    name: "Polite phrase",
    input: "mata oovaa oonee naehae.",
    expected: "මට ඕවා ඕනේ නැහැ.",
  },
  {
    id: "Pos_Fun_0009",
    name: "Negative sentence",
    input: "suba upandhinayak veevaa.",
    expected: "සුබ උපන්දිනයක් වේවා.",
  },
  {
    id: "Pos_Fun_0010",
    name: "Long sentence",
    input: "karuNaakaralaa mata vathura viidhuruvak dhenna.",
    expected: "කරුණාකරලා මට වතුර වීදුරුවක් දෙන්න.",
  },
  {
    id: "Pos_Fun_0011",
    name: "Thanks phrase",
    input: "ov, mama karannam mata puluvan.",
    expected: "ඔව්, මම කරන්නම් මට පුලුවන්.",
  },
  {
    id: "Pos_Fun_0012",
    name: "Apology phrase",
    input: "oyaa eeka gaena hiraanta kivvadha? ikmanata kiyanna, godak kal naeene.",
    expected: "ඔයා ඒක ගැන හිරාන්ට කිව්වද? ඉක්මනට කියන්න, ගොඩක් කල් නෑනෙ.",
  },
  {
    id: "Pos_Fun_0013",
    name: "Instruction sentence",
    input: "mama heta ohee enavaa.",
    expected: "හෙට ඔහේ එනවා.",
  },
  {
    id: "Pos_Fun_0014",
    name: "Request sentence",
    input: "aee ??? adha mokakdha ee vunee??",
    expected: "ඈ ??? අද මොකක්ද ඒ වුනේ??",
  },
  {
    id: "Pos_Fun_0015",
    name: "Future tense",
    input: "ammee eyaalaa enavaa.",
    expected: "අම්මේ එයාලා එනවා.",
  },
  {
    id: "Pos_Fun_0016",
    name: "Past tense",
    input: "poddak inna oyaa.",
    expected: "පොඩ්ඩක් ඉන්න ඔයා.",
  },
  {
    id: "Pos_Fun_0017",
    name: "Emotional phrase",
    input: "hari hari ohoma dhigatama enna.",
    expected: "හරි හරි ඔහොම දිගටම එන්න.",
  },
  {
    id: "Pos_Fun_0018",
    name: "Advice sentence",
    input: "mata heta Office ekee transport thiyenavaa.",
    expected: "මම හෙට Office එකේ transport තියෙනවා.",
  },
  {
    id: "Pos_Fun_0019",
    name: "Motivation",
    input: "api Colombo thiyana meeting ekata yanna hadhannee.",
    expected: "අපි Colombo තියන meeting එකට යන්න හදන්නේ.",
  },
  {
    id: "Pos_Fun_0020",
    name: "mata oyage  NIC Number eka evanna.",
    input: "මට ඔයගෙ  NIC Number එක එවන්න.",
    expected: "",
  },
  {
    id: "Pos_Fun_0021",
    name: "Polite request",
    input: " heta udheta ammalaa enavadha?",
    expected: " හෙට උදෙට අම්මලා එනවද?",
  },
  {
    id: "Pos_Fun_0022",
    name: "Simple answer",
    input: "meeke kaeeli 500yi.",
    expected: "මේකෙ කෑලි 500යි.",
  },
  {
    id: "Pos_Fun_0023",
    name: "Simple negative",
    input: "kaetmama udhee office meeting ekata yanna oni nisaa othanata giyaa ethakotath ethana as karala thibune naee. eka nisa mama ikmanata ee room eka as karala gaththaa meeting ekata ee room eka oni nisaa. ee room ekee table eka uda thibbaa ooka. hayi",
    expected: "මම උදේ office meeting එකට යන්න ඔනි නිසා ඔතනට ගියා එතකොටත් එතන අස් කරල තිබුනෙ නෑ. එක නිස මම ඉක්මනට ඒ room එක අස් කරල ගත්තා meeting එකට ඒ room එක ඔනි නිසා. ඒ room එකේ table එක උඩ තිබ්බා ඕක. ",
  },
  {
    id: "Pos_Fun_0024",
    name: "Simple thanks",
    input: "machan, mama pudhuma vunaa kiyahankoo.",
    expected: "මචන්, මම පුදුම වුනා කියහන්කෝ.",
  },
];

test.describe("Positive Functional Tests", () => {
  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/", {
        waitUntil: "networkidle",
      });
      const inputArea = page.getByPlaceholder("Input Your Singlish Text Here.");
      const inputSelector =
        'textarea[placeholder="Input Your Singlish Text Here."]';
      await page.fill(inputSelector, "");
      await inputArea.click();
      await inputArea.pressSequentially(tc.input, { delay: 35 });
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.dispatchEvent(
          new CompositionEvent("compositionend", {
            bubbles: true,
            cancelable: true,
            data: (el as HTMLTextAreaElement).value,
          }),
        );
        el.dispatchEvent(new Event("input", { bubbles: true }));
      }, inputSelector);
      const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');
      await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });
      const output = await outputBox.textContent();
      expect(output).toContain(tc.expected);
      await page.close();
    });
  }
});
