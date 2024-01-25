function getMailtoLinkForEmail(email) {
  // write your code here & return value
  return `mailto:${email}`;
}

// don't touch below this line

let email = "slayer@fquest.app";
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`);
email = "killer@fquest.app";
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`);
