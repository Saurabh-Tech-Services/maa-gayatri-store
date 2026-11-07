import { Helmet } from 'react-helmet-async';

/**
 * StructuredData — injects a JSON-LD schema block into <head> via react-helmet-async.
 * Usage: <StructuredData schema={{ "@context": "https://schema.org", ... }} />
 * Multiple schemas on one page: pass an array as `schema` prop.
 */
const StructuredData = ({ schema }) => {
    if (!schema) return null;
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(Array.isArray(schema) ? schema : schema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;

