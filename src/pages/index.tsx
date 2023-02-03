import { Footer } from '@components/Footer/Footer'
import { Grid } from '@components/Grid/Grid'
import { Header } from '@components/Header/Header'
import { HomepageCounter } from '@containers/counter/HomepageCounter'
import styled from 'styled-components'

/**
 * Homepage
 */

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
`

const HomePage: React.FC = () => {
  return (
    <Container>
      <main>
        <Header />
        {/* <HomepageCounter /> */}
        <Grid />
        <Footer />
      </main>
    </Container>
  )
}

export default HomePage
