function receivesAFunction(_name, _callback) {
  return _callback(_name);
}
receivesAFunction("Ada Lovelace", function (name) {
  return "Hello there, " + name;
});
