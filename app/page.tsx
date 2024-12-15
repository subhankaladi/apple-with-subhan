
import Books from './components/books/page'
import Fmid from './components/fmid/page'
import Main from './components/main/page'
import Mid from './components/mid/page'
import Smid from './components/smid/page'

const page = () => {
  return (
    <div>
      <Main/>
      <Mid/>
      <Smid/>
      <Fmid/>
      <Books/>
      
    </div>
  )
}

export default page