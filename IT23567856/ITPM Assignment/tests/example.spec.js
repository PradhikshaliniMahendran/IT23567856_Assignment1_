import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Interrogative daily question', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Nee enga irukka?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0002 - Convert simple daily sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naan kovilla irukken');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0003 - Convert past tense daily activity', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naan netru campus ponen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0004 - Imperative command sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('ange konjam po');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0005 - Negative sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Enakku indha song pidikkala');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0006 - Polite request sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Enakku oru book eduththu taruviyaa please?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0007 - Informal  Slang command', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Ei inga seekkiram vaa di');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0008 - Mixed English technical terms', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Enakku email onnu vandhu irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0009 - Time and neumaric format', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('thambikku class 10.00 AM ku irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0010 - Medium length compound sentence ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naan konjam thoonginen aparam konjam play panninen aparam song ketten');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0011 - Mixed language medium input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Innaikku campusla niraiya lectures irundhuchi so veettukku vara konjam late aagiruchi');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0012 - Formatting with extra spaces', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Amma    innaikku   kadailathaan     iruppanga');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0013 - Long paragraph daily narration', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('innaikku theater poytu varrappo romba traffic ah irundhuchi adhunala konjam neram beach la irundhuttu veettukku late ah vandhen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0014 - Pronoun variation sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Avan kadaikku ponaan');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0015 - plural form usage', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naangal nalaikku porom');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0016 - Future tense request', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Nalaikku ennoda varuviyaa?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0017 - Date format handling', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('School 21/01/2026 ku aarambikkudhu');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0018 - Currency format handling', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('enakku class fees Rs.3000 venum');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0019 - Medium polite request explanation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Enakku konjam money venum please nalaikku morning thara mudiyuma');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0020 - Medium compound daily conversation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naan campus la lecture mudichittu aparam  friend oda park ku poren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0021 -Medium mixed English technical sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('App install pannitten aana ulla poga mudiyala');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0022 - Long paragraph with daily narration', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Innaikku naan kaalaila seekkiram ezhundhen office poganum nu bus miss aagiduchu aparam auto pidichi ponen traffic romba adhigama irundhuchu adhunaala meeting ku late aayiduchi');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0023 - Long mixed language paragraph ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Innaikku office la project review meeting irundhuchu manager ellarum questions kettaanga naan explanation kuduthen aparam client call vera irundhuchu');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0024 - Long paragraph with future plan', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naalai naan family oda trip poganum chennai la irundhu madurai varaikkum travel pannalam booking ellam innaikku complete pannanum');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0001 - Typo heavy short input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naen veettukku porrn');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0002 - Informal shorthand usage', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('pls doc fast ah send pannu innaikku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0003 - Formatting stress with spaces', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naan           ippo                           office        la                                 irukken');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0004 - Repeated characters', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Ennaaaaaaaaaaaaa nadakkuthu inga');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0005 - Long  heavy paragraph', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('innaikku office la romba bsy ah irnthuchu naen wrk pannittey irndhen athnala veettukku romba late ah vandhn');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0006 - Ambiguous sentence meaning', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Avan solli naan panni mudichitte appram enna nadandhuchi theriyala');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0007 - Mixed English grammer overload', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Project deadline extend pannala na we are in trouble seriously ');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0008 - Alphanemeric', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('W8');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0009 - Sinhala output updates automatically in real-time', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('innaikku naan office la romba romba bsy ah irndhen bcz project deadline romba close ah irundhuchu so naen work pannittey irundhn break kuda edukkala aprm manager call pannaaru ena status nu naan explain panna try panninaen aana words ellam correct ah varala spelling mistake adhigama irundhuchu adhunala meaning romba confuse aayiduchu client call vera irundhuchu aprm veettukku romba late ah vandhn sapda time kuda kedakkala ');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0010 - Tryingl all capital sentence as input ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('NAAN VAYALUKKU POREN');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_UI_0001 - Tamil output updates automatically in real-time', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naan veettukku poren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});