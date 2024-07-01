import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home Page</Link>
            </li>
            <li>
              <Link to={routes.about()}>About Page</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact Page</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout