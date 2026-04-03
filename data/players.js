/**
 * data/players.js — Brewers Prospect Roster
 *
 * ROSTER ONLY. Just enough to render the index page and player page shell
 * before the scouting JSON loads.
 *
 * What goes here:  id, name, position, level, affiliate, age, bats/throws, draftInfo
 * What does NOT:   grades, stats, rankings, media — all from data/scouting/{id}.json
 *
 * To add a player: copy an entry, update the fields, save the file.
 * The scout job picks it up automatically on next run.
 *
 * LEVEL values: "AAA" | "AA" | "A+" | "A" | "ACL" | "DSL"
 */

export const PLAYERS = [

  // ── Triple-A Nashville Sounds ──────────────────────────────────────────────
  { id: "tyler-black",        name: "Tyler Black",        position: "2B/3B", level: "AAA", affiliate: "Nashville Sounds",          age: 24, bats: "L", throws: "R", draftInfo: "2022 · Rd 1 · Pick 33" },
  { id: "eric-brown",         name: "Eric Brown Jr.",      position: "SS",    level: "AAA", affiliate: "Nashville Sounds",          age: 24, bats: "R", throws: "R", draftInfo: "2021 · Rd 1 · Pick 15" },
  { id: "joey-wiemer",        name: "Joey Wiemer",         position: "OF",    level: "AAA", affiliate: "Nashville Sounds",          age: 26, bats: "R", throws: "R", draftInfo: "2021 · Rd 4" },
  { id: "sal-frelick",        name: "Sal Frelick",         position: "OF",    level: "AAA", affiliate: "Nashville Sounds",          age: 24, bats: "L", throws: "R", draftInfo: "2021 · Rd 1 · Pick 15" },

  // ── Double-A Biloxi Shuckers ───────────────────────────────────────────────
  { id: "cooper-pratt",       name: "Cooper Pratt",        position: "SS",    level: "AA",  affiliate: "Biloxi Shuckers",          age: 21, bats: "R", throws: "R", draftInfo: "2023 · Rd 6 · $1.35M" },
  { id: "daniel-mogollon",    name: "Daniel Mogollón",     position: "OF",    level: "AA",  affiliate: "Biloxi Shuckers",          age: 20, bats: "L", throws: "L", draftInfo: "IFA 2021 · Venezuela" },
  { id: "brock-wilken",       name: "Brock Wilken",        position: "3B",    level: "AA",  affiliate: "Biloxi Shuckers",          age: 23, bats: "R", throws: "R", draftInfo: "2023 · Rd 1 · Pick 18" },
  { id: "joey-meyer",         name: "Joey Meyer",          position: "1B",    level: "AA",  affiliate: "Biloxi Shuckers",          age: 22, bats: "L", throws: "R", draftInfo: "2023 · Rd 3" },
  { id: "carlos-rodriguez",   name: "Carlos Rodríguez",    position: "OF",    level: "AA",  affiliate: "Biloxi Shuckers",          age: 23, bats: "L", throws: "L", draftInfo: "IFA 2018 · Nicaragua" },
  { id: "mike-boeve",         name: "Mike Boeve",          position: "OF",    level: "AA",  affiliate: "Biloxi Shuckers",          age: 24, bats: "L", throws: "L", draftInfo: "2022 · Rd 5" },
  { id: "jace-jung",          name: "Jace Jung",           position: "2B/3B", level: "AA",  affiliate: "Biloxi Shuckers",          age: 24, bats: "L", throws: "R", draftInfo: "2022 · Rd 1" },
  { id: "antoine-duplantis",  name: "Antoine Duplantis",   position: "OF",    level: "AA",  affiliate: "Biloxi Shuckers",          age: 27, bats: "L", throws: "L", draftInfo: "2021 · Rd 6" },
  { id: "brandon-wright",     name: "Brandon Wright",      position: "SP",    level: "AA",  affiliate: "Biloxi Shuckers",          age: 24, bats: "R", throws: "R", draftInfo: "2021 · Rd 2" },
  { id: "adam-seminaris",     name: "Adam Seminaris",      position: "SP",    level: "AA",  affiliate: "Biloxi Shuckers",          age: 26, bats: "R", throws: "L", draftInfo: "2020 · Rd 5" },

  // ── High-A Wisconsin Timber Rattlers ───────────────────────────────────────
  { id: "jacob-misiorowski",  name: "Jacob Misiorowski",   position: "SP",    level: "A+",  affiliate: "Wisconsin Timber Rattlers", age: 22, bats: "R", throws: "R", draftInfo: "2022 · Rd 2 · Pick 41" },
  { id: "arjun-nimmala",      name: "Arjun Nimmala",       position: "SS",    level: "A+",  affiliate: "Wisconsin Timber Rattlers", age: 19, bats: "R", throws: "R", draftInfo: "2024 · Rd 1 · Pick 6" },
  { id: "jackson-fristoe",    name: "Jackson Fristoe",     position: "SP",    level: "A+",  affiliate: "Wisconsin Timber Rattlers", age: 22, bats: "R", throws: "R", draftInfo: "2023 · Rd 2" },
  { id: "edgar-soto",         name: "Edgar Soto",          position: "SS/2B", level: "A+",  affiliate: "Wisconsin Timber Rattlers", age: 21, bats: "R", throws: "R", draftInfo: "IFA 2020" },
  { id: "aidan-smith",        name: "Aidan Smith",         position: "OF",    level: "A+",  affiliate: "Wisconsin Timber Rattlers", age: 22, bats: "L", throws: "L", draftInfo: "2023 · Rd 3" },
  { id: "robert-moore",       name: "Robert Moore",        position: "2B/SS", level: "A+",  affiliate: "Wisconsin Timber Rattlers", age: 23, bats: "R", throws: "R", draftInfo: "2020 · Rd 2" },
  { id: "tj-shook",           name: "TJ Shook",            position: "SP",    level: "A+",  affiliate: "Wisconsin Timber Rattlers", age: 22, bats: "R", throws: "R", draftInfo: "2023 · Rd 4" },
  { id: "nick-miehlke",       name: "Nick Miehlke",        position: "SP",    level: "A+",  affiliate: "Wisconsin Timber Rattlers", age: 23, bats: "R", throws: "L", draftInfo: "2022 · Rd 6" },
  { id: "jose-acosta",        name: "José Acosta",         position: "SP",    level: "A+",  affiliate: "Wisconsin Timber Rattlers", age: 20, bats: "R", throws: "R", draftInfo: "IFA 2021" },
  { id: "juan-baez",          name: "Juan Báez",           position: "C",     level: "A+",  affiliate: "Wisconsin Timber Rattlers", age: 21, bats: "R", throws: "R", draftInfo: "IFA 2021" },

  // ── Low-A Carolina Mudcats ─────────────────────────────────────────────────
  { id: "kai-murphy",         name: "Kai Murphy",          position: "OF",    level: "A",   affiliate: "Carolina Mudcats",         age: 20, bats: "L", throws: "L", draftInfo: "2024 · Rd 2" },
  { id: "adam-mazur",         name: "Adam Mazur",          position: "SP",    level: "A",   affiliate: "Carolina Mudcats",         age: 23, bats: "R", throws: "R", draftInfo: "2023 · Rd 2" },
  { id: "leo-howden",         name: "Leo Howden",          position: "SP",    level: "A",   affiliate: "Carolina Mudcats",         age: 22, bats: "R", throws: "L", draftInfo: "2023 · Rd 3" },
  { id: "cam-devanney",       name: "Cam Devanney",        position: "3B/OF", level: "A",   affiliate: "Carolina Mudcats",         age: 22, bats: "R", throws: "R", draftInfo: "2023 · Rd 5" },
  { id: "freili-encarnacion", name: "Freili Encarnacion",  position: "C",     level: "A",   affiliate: "Carolina Mudcats",         age: 20, bats: "R", throws: "R", draftInfo: "IFA 2022" },
  { id: "juan-mercedes",      name: "Juan Mercedes",       position: "SS/2B", level: "A",   affiliate: "Carolina Mudcats",         age: 19, bats: "R", throws: "R", draftInfo: "IFA 2022" },

  // ── ACL / DSL ──────────────────────────────────────────────────────────────
  { id: "abrahan-ramirez",    name: "Abrahan Ramirez",     position: "SS",    level: "ACL", affiliate: "ACL Brewers",              age: 17, bats: "R", throws: "R", draftInfo: "IFA 2025" },
  { id: "wilmin-candelario",  name: "Wilmin Candelario",   position: "OF",    level: "ACL", affiliate: "ACL Brewers",              age: 17, bats: "L", throws: "L", draftInfo: "IFA 2025" },

];

// ── Convenience exports ────────────────────────────────────────────────────────

export const PLAYERS_BY_ID = Object.fromEntries(PLAYERS.map(p => [p.id, p]));

export const LEVEL_ORDER  = ["AAA", "AA", "A+", "A", "ACL", "DSL"];
export const LEVEL_LABELS = {
  "AAA": "Triple-A",
  "AA":  "Double-A",
  "A+":  "High-A",
  "A":   "Low-A",
  "ACL": "Complex League",
  "DSL": "Dominican Summer League"
};

export const GRADE_COLOR = (g) => {
  if (!g) return "#4a5568";
  if (g >= 65) return "#06d6a0";
  if (g >= 55) return "#e9c46a";
  if (g >= 50) return "#f4a261";
  return "#e63946";
};

export const GRADE_LABEL = (g) => {
  if (!g)      return "–";
  if (g >= 70) return "Plus-Plus";
  if (g >= 60) return "Plus";
  if (g >= 55) return "Above Avg";
  if (g >= 50) return "Average";
  if (g >= 45) return "Below Avg";
  return "Well Below";
};
