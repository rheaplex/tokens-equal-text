const fs = require('fs')
const process = require('process')

/*const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient('localhost', '5001', { protocol: 'http' })*/

const NUM_TOKENS = 32
const TOKEN_BASE = 1

const IMG_URL_BASE =
      "ipfs://Qmavu1wg3sN8gF811ZUdn4uw41F1yR9xu7dnhTNer1pzYC"

/*let main = async () => {
  const imgResults = await ipfs.addFromFs(
    './metadata/tokens-equal-text/images',
    { recursive: true, pin: true }
  )
  const imageDir = imgResults.find(a => a.path == 'images').hash*/
  const imageDir = 'images'

  for(let i = 0; i < NUM_TOKENS; i++) {
    const tokenNum = TOKEN_BASE + i;
    const filePath = `./metadata/${tokenNum}`
    fs.writeFileSync(filePath, `{
"description": "A composable token that owns children with aesthetic IDs.",
"image": "${IMG_URL_BASE}/${tokenNum}.png",
"name": "Tokens Equal Text ${tokenNum}"
}`  )
  }

/*
  const metaResults = await ipfs.addFromFs(
    './metadata/tokens-equal-text/metadata',
    { recursive: true, pin: true }
  )
  const metaDir = metaResults.find(a => a.path == 'metadata').hash
  console.log("UPDATE contracts/TokensEqualTextERC998.sol URLS TO USE:")
  console.log(metaDir)
}

main()
*/
