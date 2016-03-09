// require.context(
//   '../content',
//   true,
//   /.*/
// )('./' + expr + '')

function requireAll (requireContext) {
  return requireContext.keys().map(requireContext)
}
// requires and returns all modules that match

requireAll(require.context('../content', true, /.*/))
// is an array containing all the matching modules
