import Layout from '../components/layout'
import Hero from '../components/hero'
import ContactSection from '../components/contactSection'
import AboutSection from '../components/about'

export default function Index() {

  return (
    <Layout home>
      <Hero />
      <AboutSection />
      <ContactSection />
    </Layout>
  )
}
