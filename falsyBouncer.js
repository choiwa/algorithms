function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(curr => curr)
}

bouncer([false, null, 0, NaN, undefined, ""]);