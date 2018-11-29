import facepaint from 'facepaint'

const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const styles = {
  logoWrap: mq({
    marginLeft: '0!important',
    paddingTop: '13px!important',
    paddingBottom: '0!important',
    paddingRight: '0!important',
    paddingLeft: ['15px!important','15px!important','15px!important','10px!important'],
    fontSize: ['1em','1.5em','2.1em','2.1em'],
  }),
  logoLink: {
    textDecoration: 'none!important',
    color: 'black!important',
    },
  subMenuCol: {
    float: 'left',
    display: 'block',
    position: 'relative',
    listStyle: 'none',
    margin: 0,
    paddingLeft: 0,
  },
  subMenuCol2: {
    float: 'right',
    display: 'block',
    position: 'relative',
    listStyle: 'none',
    margin: 0,
    paddingLeft: 0,
  },
  subMenuLink: mq({
    cursor: 'pointer',
    fontSize: ['1em','1.5em','2em','2em'],
    color: '#CACAC8!important',
  }),
  subMenuLinkBlack: mq({
    cursor: 'pointer',
    fontSize: ['1em','1.5em','2em','2em'],
    color: 'black!important',
  }),
  
  subMenuLinkShop: mq({
    color: '#CACAC8',
    fontSize: ['1em','1.5em','2em','2em'],
    cursor: 'pointer',
  }),
  subMenuItem: mq({
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingLeft: 15,
    paddingRight: 10,
    width: ['20vw','20vw', 160],
  }),
  subMenuItemLeft: mq({
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingLeft: 15,
    paddingRight: 10,
    width: ['20vw','20vw', '160px!important'],
    textAlign: 'right',
  }),
  brand: mq({
    float: 'left',
    minWidth: ['100%!important','100%!important','100%!important','25%!important'],
  }),
  menuContainer: mq({
    display: 'block',
    transition : 'top 0.5 ease-in',
    backgroundColor: 'transparent!important',
    borderWidth: '0!important',
    marginBottom: '0!important',
    minHeight: '230px!important',
    paddingLeft: ['32px','32px','80px','140px','160px'],
    paddingRight: ['32px','32px','80px','140px','160px'],
    paddingTop: 20,
  }),

  dropDownWrap: mq({
    paddingLeft: ['0px','0px','0px','0px'], 
    float: 'left', 
    display: 'block', 
    width: ['80%','80%','80%','65%'],
  }),

  shopWrap: mq({
    position: 'relative', 
    float: 'right!important', 
    width: ['10%','10%','10%','10%'],
  })
}
