// Web Audio API procedural synthesizer - 0 external assets, zero latency

let audioCtx = null;
let soundEnabled = false;

// Initialize state from localStorage if available
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('cyber_portfolio_sfx');
    soundEnabled = saved === 'true';
  } catch (e) {
    soundEnabled = false;
  }
}

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const soundManager = {
  isEnabled: () => soundEnabled,

  toggle: () => {
    soundEnabled = !soundEnabled;
    try {
      localStorage.setItem('cyber_portfolio_sfx', soundEnabled ? 'true' : 'false');
    } catch (e) {}
    
    // Dispatch event so UI indicators update instantly
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cyber-sfx-toggled', { detail: { enabled: soundEnabled } }));
    }

    if (soundEnabled) {
      getAudioContext();
      soundManager.playExecute();
    }
    return soundEnabled;
  },

  setEnabled: (val) => {
    soundEnabled = Boolean(val);
    try {
      localStorage.setItem('cyber_portfolio_sfx', soundEnabled ? 'true' : 'false');
    } catch (e) {}
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cyber-sfx-toggled', { detail: { enabled: soundEnabled } }));
    }
  },

  // Soft high-frequency tactical hover blip
  playHover: () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(950, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.035);
    } catch (e) {}
  },

  // Crisp mechanical tactile click
  playClick: () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(650, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.045);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.045);
    } catch (e) {}
  },

  // Tactile vintage mechanical keyboard tick for terminal typing
  playKeystroke: () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Subtle pitch variation for realistic tactile feel
      const baseFreq = 420 + (Math.random() * 80 - 40);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.025);

      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.025);
    } catch (e) {}
  },

  // Dual-tone cyber execution chime (cyber mainframe feedback)
  playExecute: () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      [
        { freq: 587.33, start: now, dur: 0.06 },       // D5
        { freq: 880.00, start: now + 0.05, dur: 0.09 } // A5
      ].forEach(({ freq, start, dur }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.03, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + dur);
      });
    } catch (e) {}
  },

  // Error / Access Denied low buzzer
  playError: () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(90, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {}
  },

  // Matrix digital activation warble
  playMatrix: () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const notes = [440, 554.37, 659.25, 830.61, 987.77];
      notes.forEach((freq, idx) => {
        const start = ctx.currentTime + idx * 0.04;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.025, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + 0.08);
      });
    } catch (e) {}
  }
};
