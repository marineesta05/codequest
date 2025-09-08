/**
 * N00: System Check & Warm-up
 * Your first CodeQuest challenge!
 */

/**
 * Returns environment information
 * @returns {Object} Environment details with node version, platform, and ready status
 */
function getEnvironment() {
  // TODO: Return an object with:
  // - node: process.version (Node.js version)
  // - platform: process.platform (OS platform)
  // - ready: true if node version >= 16
  return {
    node: process.version,
    platform: process.platform,
    ready: true
  };
  // Your code here
}

/**
 * Creates a welcome message
 * @param {string} name - The name to welcome
 * @returns {string} Welcome message
 */
function warmUp(name = 'Adventurer') {
  // TODO: Return "Welcome [name] to CodeQuest!"
  return `Welcome ${name} to CodeQuest!`;
  // Your code here
}

/**
 * ==============================
 * Extra: 20 Warm-up mini-défis
 * ==============================
 * 5 simples, 5 faciles, 5 moyens, 5 complexes.
 */

// Simples
function greetUpper(name) {
  // TODO: Retourner un message en UPPERCASE: `HELLO, ${name}!`
  name = name.toUpperCase();
  return `HELLO, ${name}!`;
}

function reverseString(s) {
  // TODO: Retourner la chaîne inversée
  return s.split('').reverse().join('');
}

function repeatString(s, n) {
  // TODO: Répéter s n fois (n>=0) sans effets de bord
  for (let i = 1; i < n; i++) {
    s += s;
  }
  return s;
}

function parseSemver(version) {
  // TODO: Retourner { major, minor, patch } depuis 'v16.14.2' ou '16.14.2'
  const regex = /v?(\d+)\.(\d+)\.(\d+)/;
  const match = version.match(regex);
  if (match) {
    return {
      major: parseInt(match[1], 10),
      minor: parseInt(match[2], 10),
      patch: parseInt(match[3], 10)
    };
  }
  return null;
}

function isNodeGte(required) {
  // TODO: Retourner true si process.version >= required (ex: '16.0.0') sans effets de bord
  const current = parseSemver(process.version);
  const req = parseSemver(required);
  if (!current || !req) return false;
  if (current.major > req.major) return true;
  if (current.major < req.major) return false;
  if (current.minor > req.minor) return true;
  if (current.minor < req.minor) return false;
  return current.patch >= req.patch;  

}

// Faciles
function sumRange(n) {
  // TODO: Somme 1..n (n>=1)
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function factorial(n) {
  // TODO: Factorielle de n (0! = 1)
  if (n === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function isPrime(n) {
  // TODO: Tester primalité (n entier >= 0)
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function toKebab(str) {
  // TODO: Convertir 'Hello World_test' → 'hello-world-test'
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') 
    .replace(/[_\s]+/g, '-') 
    .toLowerCase();
}

function formatBytes(bytes) {
  // TODO: Retourner une chaîne formatée (ex: 1024 → '1 KB') sans I/O
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Moyens
function range(start, end, step = 1) {
  // TODO: Retourner un tableau [start, start+step, ..., <= end]
  const result = [];
  if (step <= 0) return result;
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

function uniqueSorted(arr) {
  // TODO: Retourner valeurs uniques triées (asc)
  return Array.from(new Set(arr)).sort((a, b) => a - b);
}

function chunkArray(arr, size) {
  // TODO: Retourner un tableau de sous-tableaux de taille size
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function median(arr) {
  // TODO: Retourner la médiane (tableau non vide) usinf export median
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}


// Don't forget to export your functions!
module.exports = {
  getEnvironment,
  warmUp,
  // extras
  greetUpper,
  reverseString,
  repeatString,
  parseSemver,
  isNodeGte,
  sumRange,
  factorial,
  isPrime,
  toKebab,
  formatBytes,
  range,
  uniqueSorted,
  chunkArray,
  median
};
