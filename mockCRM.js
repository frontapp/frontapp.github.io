// This file provides fake CRM functionality to provide information to the sample plugin
// and should be seen as an analog for the functionality developers add for their custom plugin.
//
// This function returns mock CRM data and simply picks a random index from the mockStatus and organizes data related to the index.
function mockQueryCRM(email) {
  return new Promise(function(resolve) {
    console.log(`Build mock CRM data for ${email}`);
    const infoIndex = Math.floor(Math.random() * mockStatuses.length);
    const info = {
      id: Math.floor(Math.random() * 1000),
      location: 'Fake Company HQ',
      status: mockStatuses[infoIndex]
    }

    let notes = [];
    notes.push(mockNotesSamples[infoIndex]);
    notes.push(mockNotesSamples[infoIndex + mockStatuses.length]);
    resolve({notes, info});
  });
}

// This function operates as a blackbox CRM function which creates a new note and returns it to be displayed.
// This function picks a random index from mockNotesSamples and returns the relevant note.
function mockPostNote() {
  return new Promise(function(resolve) {
    const noteIndex = Math.floor(Math.random() * mockNotesSamples.length);
    resolve(mockNotesSamples[noteIndex]);
  });
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
