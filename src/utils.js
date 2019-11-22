const webpackMerge = (base, extend) => {
  const config = Object.assign({}, base)
  for (const key in extend) {
    const value = extend[key]
    const configValue = getDeepValue(config, key)
    if (isFunction(value)) {
      setDeepValue(config, value(configValue), key)
    } else {
      setDeepValue(config, value, key)
    }
  }
  return config
}