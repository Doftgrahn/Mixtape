import { ObjectID } from 'bson'

export default () => {
  const id = new ObjectID()
  return id.toHexString()
}
