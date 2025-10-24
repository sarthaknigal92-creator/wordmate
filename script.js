// Mock generation logic so the app costs you nothing.
// Save / Copy features included.

const promptEl = document.getElementById('prompt');
const outputEl = document.getElementById('output');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const typeSel = document.getElementById('type');

function mockGenerate(prompt, type){
  // deterministic mock: include prompt + some templated text
  const header = `${type.toUpperCase()} SAMPLE\n\nPrompt: ${prompt}\n\n`;
  const body = `This is a mock-generated ${type} created by WordMate. Replace mock mode with a real API key to generate real content.\n\nKey points to expand:\n- Start with a strong hook.\n- Add 3 short paragraphs.\n- Finish with a clear CTA.\n\nExample paragraph:\n${prompt.split(' ').slice(0,40).join(' ')}...`;
  return header + body;
}

generateBtn.addEventListener('click', ()=>{
  const prompt = promptEl.value.trim();
  if(!prompt){ alert('Please write a prompt first.'); return; }
  generateBtn.disabled = true;
  generateBtn.textContent = 'Generating...';
  // simulate small delay for UX
  setTimeout(()=>{
    const out = mockGenerate(prompt, typeSel.value);
    outputEl.textContent = out;
    generateBtn.disabled = false;
    generateBtn.textContent = 'Generate';
  }, 700);
});

copyBtn.addEventListener('click', async ()=>{
  try{
    await navigator.clipboard.writeText(outputEl.textContent);
    copyBtn.textContent = 'Copied!';
    setTimeout(()=>copyBtn.textContent = 'Copy', 1200);
  }catch(e){
    alert('Copy failed: ' + e.message);
  }
});

downloadBtn.addEventListener('click', ()=>{
  const text = outputEl.textContent || '';
  if(!text){ alert('Nothing to download yet.'); return; }
  const blob = new Blob([text], {type:'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const filename = 'wordmate_output.txt';
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});