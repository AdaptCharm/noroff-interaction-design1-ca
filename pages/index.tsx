import { Layout } from '@components/common'
import Link from 'next/link'
import Image from 'next/image'

const hero = [
  {
    title: 'Modern and affordable baby carriers',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accontium doloremque.',
    image: {},
    cta: 'Explore',
  },
]

const projects = [
  {
    title: 'Conscious Coffee',
    href: '/projects/conscious-coffee',
    imageUrl: '/snapshots/conscious-coffee.png',
  },
  {
    title: 'Community Science Museum',
    href: '/projects/community-science-museum',
    imageUrl: '/snapshots/community-science-museum.png',
  },
  {
    title: 'Explore',
    href: '/projects/explore',
    imageUrl: '/snapshots/explore.png',
  },
]

const Home = () => {
  return (
    <>
      <div className="relative bg-white dark:bg-black pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl p-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-6xl md:text-7xl tracking-tight font-extrabold text-black dark:text-white">
              Projects
            </h2>
            <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-xl text-black dark:text-white">
              Select one of the projects below to see the improvements.
            </p>
          </div>
          <div className="mt-16 mb-32 max-w-lg mx-auto grid gap-16 lg:gap-8 lg:grid-cols-3 lg:max-w-none">
            {projects.map((project) => (
              <div key={project.title}>
                <Link href={project.href}>
                  <a className="flex flex-col shadow-lg overflow-hidden rounded-md transition ease-default duration-200 hover:shadow-medium">
                    <div className="flex-shrink-0 transition ease-default duration-200 hover:opacity-60">
                      <Image
                        className="object-cover object-center"
                        src={project.imageUrl}
                        alt={project.title}
                        width={277.33}
                        height={191.36}
                        layout="responsive"
                        priority={true}
                      />
                    </div>
                  </a>
                </Link>
                <div className="mt-3 flex justify-center">
                  <p className="text-md text-black dark:text-white">
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

Home.Layout = Layout
