import coffeeList from '../../../../db.json'
import { Card } from '../../../components/Card'
import coffeeCup from '/images/coffee-cup.png'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import { Header, HomeContainer, ProductsList, Subtitle } from './styles'


export function Home() {

  return (
    <>
      <HomeContainer>
        <Header>
          <div>
            <h1>
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <div>
              <ul>
                <li><span className='cart'><ShoppingCart weight="fill" /></span>Compra simples e segura</li>
                <li><span className='package'><Package weight="fill" /></span>Embalagem mantém o café intacto</li>
                <li><span className='timer'><Timer weight="fill" /></span>Entrega rápida e rastreada</li>
                <li><span className='coffee'><Coffee weight="fill" /></span>O café chega fresquinho até você</li>
              </ul>
            </div>
          </div>
          <div>
            <img src={coffeeCup} />
          </div>
        </Header>
      </HomeContainer>
      <Subtitle>
        <h3>Nossos cafés</h3>
      </Subtitle>
      <ProductsList>
        {
          coffeeList.map((item) =>
            <Card
              key={item.id}
              product={{ ...item, quantity: 0 }}

            />
          )
        }
      </ProductsList>
    </>
  )
}
