type NameProp = {
  arr: {
    title: string,
    job: string
  }[]
};

const Header = (props: NameProp) => {
  return (
    <h1>
     {
      props.arr.map(item => <p key={item.job}>{item.title}</p>)
     }
    </h1>
  )
}

export default Header