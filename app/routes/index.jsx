import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export const meta = () => {
  return {
    title: 'Hydrogen',
    description: 'A custom storefront powered by Hydrogen',
  };
};

export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

export default function Index() {
  const {collections} = useLoaderData();
  const sortedCollections = collections.nodes.sort((a, b) => a.title.localeCompare(b.title));
  const groupedCollections = sortedCollections.reduce((result, collection) => {
  const section = getSection(collection.title);
    if (!result[section]) {
      result[section] = [];
    }
    result[section].push(collection);
    return result;
  }, {});

  return (
    <>
      <section className="w-full gap-4">
        <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
          Collections
        </h2>
        {Object.entries(groupedCollections).map(([section, collectionsInSection]) => (
          <div key={section}>
            <h3 style = {{lineHeight: '2px'}}>{section}</h3>
            <hr style = {{width: '80px', border: 'solid black 1px', margin: '0', marginTop: '-3px'}}></hr>
            <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false sm:grid-cols-3 false false">
              {collectionsInSection.map((collection) => {
                // Render each collection here
                return (
                  <Link to={`/collections/${collection.handle}`} key={collection.id} style ={{textDecoration: 'none', color: 'black',margin:'35px'}}>
                    <h2>
                      {collection.title}
                    </h2>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>
      {/*<section className="w-full gap-4">
        <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
          Collections
        </h2>
        <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3 false false">
          {collections.nodes.map((collection) => {
            return (
              <pre key={collection.id} style={{ float: 'left',margin: '35px' }}>
                <div className="grid gap-4">
                  {collection?.image && (
                    <Image
                      alt={`Image of ${collection.title}`}
                      data={collection.image}
                      key={collection.id}
                      sizes="(max-width: 20em) 50vw, 20vw"
                      width = {350}
                      height = {250}
                      loaderOptions={{
                        scale: 5,
                        crop: 'center',
                      }}
                      style = {{border: 'solid 2px black', borderRadius: '3%'}}
                    />
                  )}
                </div>
                <br />
                <Link to={`/collections/${collection.handle}`} key={collection.id} style ={{textDecoration: 'none', color: 'black'}}>
                    <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy">
                      {collection.title}
                    </h2>
                </Link>
              </pre>
            );
          })}
        </div>
      </section>*/}
    </>
  )
}

function getSection(title) {
  const firstLetter = title.charAt(0).toUpperCase();
  if (/[A-Z]/.test(firstLetter)) {
    return firstLetter;
  } else {
    return 'Other';
  }
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 6) {
      nodes {
        id
        title
        handle
        description
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;
