function Phone({ company, price, img }) {
  return (
    <div className="phone">
      <img src={img} alt="phone"/>
      <h4>{company}</h4>
      <h3>{price}</h3>
    </div>
  )
}

export default Phone
