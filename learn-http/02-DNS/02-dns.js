function getDomainNameFromURL(url) {
  const splitAddress = url.split("//");
  const fullPath = splitAddress[1];
  const domain = fullPath.split("/")[0];

  return domain;
}

// don't touch below this line

const bootdevURL = "https://boot.dev/learn/learn-python";
const domainName = getDomainNameFromURL(bootdevURL);
console.log(`The domain name for ${bootdevURL} is ${domainName}`);
