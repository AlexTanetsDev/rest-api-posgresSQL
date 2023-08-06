const createQueryStr = (body) => {
  const reqArr = Object.keys(body);
  const values = Object.values(body);
  let userQuerryStr = "";
  let profileQuerryStr = "";
  reqArr.forEach((i, idx) => {
    if (i === "username" || i === "email" || i === "role") {
      userQuerryStr += `${i} = '${values[idx]}',`;
    } else {
      profileQuerryStr += `${i} = '${values[idx]}',`;
    }
  });

  return {
    userQuerryStr: userQuerryStr.slice(0, userQuerryStr.length - 1),
    profileQuerryStr: profileQuerryStr.slice(0, profileQuerryStr.length - 1),
  };
};

module.exports = createQueryStr;
