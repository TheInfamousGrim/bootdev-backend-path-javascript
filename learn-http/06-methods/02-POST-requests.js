async function createUser(apiKey, url, data) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Test Suite Don't Touch Below This Line

const userToCreate = {
  characterName: "Grendel",
  class: "Warrior",
  level: 1,
  pvpEnabled: false,
  user: {
    name: "Allan",
    location: "USA",
    age: 27,
  },
};

const generatedKey = generateKey();
const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

async function getUsers(url, apiKey) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
    },
  });
  return response.json();
}
