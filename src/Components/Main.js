import React,{useContext} from 'react'
import Header from './Header'
import Content from './Content'
import themeContext from './MyContext'

export default function Main() {
  const myStyle = {
    // color: 'white',
    backgroundColor: 'black',
};

const {themeValue} = useContext(themeContext);
  return (
    <section className='main'style={themeValue === 'dark' ? myStyle : {}}>
      <Header />
      <Content />
    </section>
  )
}
