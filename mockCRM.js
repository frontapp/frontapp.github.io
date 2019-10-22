// This function returns mock CRM data and is being used as an analog for your functionality being added to the plugin.  
// This simply picks random data and organizes it.
function mockQueryCRM(email) {
  console.log(`Build mock CRM data for ${email}`);
  const infoIndex = Math.floor(Math.random() * 4);
  const info = {
    id: Math.floor(Math.random() * 1000),
    location: 'Fake Company HQ',
    status: mockStatuses[infoIndex]
  }

  let notes = [];
  notes.push(mockNotesSamples[infoIndex]);
  notes.push(mockNotesSamples[infoIndex + 4]);
  return {notes, info};
}

// Here's some fake CRM data to display in the plugin.
const mockStatuses = ['Open', 'Closed', 'Won', 'Blocked'];
const mockNotesSamples = [
  {
    author: "Phillip Fry",
    blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    time: "10m"
  },
  {
    author: "Professor Farnsworth",
    blurb: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    time: "15m"
  },
  {
    author: "Turanga Leela",
    blurb: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    time: "20m"
  },
  {
    author: "Bender Rodriguez",
    blurb: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    time: "25m"
  },
  {
    author: "Doctor Zoidberg",
    blurb: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    time: "30m"
  },
  {
    author: "Hermes Conrad",
    blurb: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    time: "30m"
  },
  {
    author: "Amy Wong",
    blurb: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    time: "35m"
  },
  {
    author: "Scruffy",
    blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    time: "40m"
  }
];