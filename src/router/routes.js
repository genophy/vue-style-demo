/**
 FileDesc  :
 Author    :  g_eno_phy
 Date      :  2020-01-30 22:30
 Version   :
 */
import childrenRoutes from 'vue-auto-routing';


const _resetRoutes = (r) => {
    if (r && r instanceof Array) {
        r = r.map(rItem => {
            // config all $route.query properties routeQuery
            rItem.props = ({query}) => ({routeQuery: query});

            rItem.children = _resetRoutes(rItem.children);

            if (rItem.meta) {
                // if has routeRedirect
                if (rItem.meta['routeRedirect']) {
                    rItem.redirect = rItem.meta['routeRedirect'];
                    rItem.meta['routeRedirect'] = (void 0);
                }
                // if has routeDefault
                if (rItem.meta['routeDefault'] && rItem.children && rItem.children instanceof Array) {
                    rItem.children.push({
                        path    : `**`,
                        redirect: rItem.meta['routeDefault']
                    });
                }
            }
            return rItem;
        });
    }
    return r;
};
const routes = _resetRoutes(childrenRoutes);

export default routes;
