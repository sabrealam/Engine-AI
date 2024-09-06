async function spinner() {
  const ora = (await import("ora")).default;
  return ora();
}

module.exports = spinner;
