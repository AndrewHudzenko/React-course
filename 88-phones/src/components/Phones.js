import products from '../data/products'
import Phone from './Phone'

function Phones() {
  return (
    <div className="phones">
      {products.map((product) => {
        return <Phone key={product.id} {...product} />
      })}
    </div>
  )
}

export default Phones
