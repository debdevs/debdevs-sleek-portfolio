import sanityClient from "@sanity/client";

// export default sanityClient({
//   projectId: "vd2lwzyh", // find this at manage.sanity.io or in your sanity.json
//   dataset: "production", // this is from those question during 'sanity init'
// });

export default sanityClient({
    projectId: 'vd2lwzyh',
    dataset: 'production',
    apiVersion: '2023-02-01', // use a UTC date string
    // token: 'sanity-auth-token', // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  })