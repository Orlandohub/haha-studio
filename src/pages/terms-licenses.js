import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'react-emotion'
import * as styles from '../components/IndexPageStyles/TermsAndLicensesStyles/styles'
import ShopNavigation from '../components/ShopNavigation/index'
import { StyledScrollTop } from '../components/Projects/styles'

const TermsAndLicenses = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <div className={css(styles.termsLicensesWrapper)}>
        <StyledScrollTop
          text=""
          distance={1500}
          breakpoint={1024}
          speed={500}
          target={0}
          icon={null}
        />
        <div className={css(styles.termsLicensesTitle)}>
          Terms/Licenses
          <br />
          <br />
          <br />
        </div>
        <div className={css(styles.termsLicensesTextWrapper)}>
          Terms and Conditions of Neubau
          <br />
          <br />
          The following Terms and Conditions shall apply exclusively to any and
          all contracts, agreements and interactions between Neubau/Mr Stefan
          Gandl, Paul-Lincke-Ufer 44a, 10999 Berlin, Germany (“Neubau”) and the
          customer (“Customer”), including through the website
          www.neubauberlin.com, www.neubauladen.com & www.neubauedition.com
          (“Website”). Any additional or inconsistent terms used by the Customer
          shall not be binding upon Neubau, unless Neubau gives its express
          agreement in writing.
          <br />
          <br />
          § 1 Offers and Service
          <br />
          <br />
          Any offer, quotation or price information by Neubau regarding the
          fonts, text, graphics and any other items accessed from or via this
          Website or otherwise through the internet (“Own Content”) is without
          obligation and subject to change without notice unless an offer has
          been designated as binding.
          <br />
          Neubau expressly reserves itself the right to change, amend, cancel or
          close down parts or the entire Own Content and the Website
          definitively or from time to time. Neubau makes no warranties, express
          or implied, that its services will be uninterrupted, error-free or
          free of viruses or other harmful components, unless respective faults
          were caused by Neubau by act of gross negligence or intent.
          <br />
          <br />
          § 2 Contract
          <br />
          <br />
          By entering and using the Website, the Costumer accepts the Terms and
          Conditions and expressly adheres to the following:
          <br />
          A contract for digital goods is made effective between the costumer
          and Neubau by placing an order.
          <br />
          When placing an order for physical goods, the order shall be deemed to
          be accepted by Neubau either upon subsequent (e-mail) acceptance of
          the order or by dispatching the product.
          <br />
          <br />
          § 3 Right to Withdrawal
          <br />
          <br />
          A) Digital Goods
          <br />
          The Customer is informed about his rights of withdrawal in accordance
          with § 356 (5) German Civil Code (BGB) and hereby expressly consents
          to and accepts by placing an order:
          <br />
          (i) that Neubau executes the contract prior to the end of the
          withdrawal period; and
          <br />
          (ii) that the Customer forfeits his respective withdrawal rights
          pertaining to digital media files such as downloads or email
          attachments (“Digital Goods”) with execution of the contract, i.e. by
          starting the download.
          <br />
          <br />
          B) Physical Goods
          <br />
          The following rights of withdrawal apply to Customers only who act as
          a consumer acc. to § 13 BGB, i.e. predominantly not for business
          purposes.
          <br />
          <br />
          (1) Right of withdrawal The Customer has the right to withdraw from
          the contract with Neubau within 14 days without giving any reason.
          <br />
          The withdrawal period will expire after 14 days from the day on which
          the Customers acquires, or a third party other than the carrier and
          indicated by the Customer acquires, physical possession of the goods.
          <br />
          To exercise the right of withdrawal, the Customer must inform Neubau,
          Paul-Lincke-Ufer 44a, 10999 Berlin, of the decision to withdraw from
          the contract by an unequivocal statement (e.g. a letter sent by post,
          fax or e-mail). The Customer may use the attached model withdrawal
          form, but this is not mandatory.
          <br />
          To meet the withdrawal deadline, it is sufficient for the Customer to
          send the communication concerning the exercise of the right of
          withdrawal before the withdrawal period has expired.
          <br />
          <br />
          Effects of withdrawal
          <br />
          <br />
          If the Customer withdraws from this contract, Neubau shall reimburse
          to the Customer all payments received from the Customer, including the
          costs of delivery (with the exception of the supplementary costs
          resulting from the Customer’s choice of a type of delivery other than
          the least expensive type of standard delivery offered by Neubau),
          without undue delay and in any event not later than 14 days from the
          day on which Neubau is informed about the Customer’s decision to
          withdraw from the contract. Neubau will carry out such reimbursement
          using the same means of payment as the Customer used for the initial
          transaction, unless the Customer has expressly agreed otherwise; in
          any event, the Customer will not incur any fees as a result of such
          reimbursement. Neubau may withhold reimbursement until Neubau has
          received the goods back or the Customer has supplied evidence of
          having sent back the goods, whichever is the earliest.
          <br />
          <br />
          The Customer shall send back the goods or hand them over to Neubau,
          without undue delay and in any event not later than 14 days from the
          day on which the Customer communicates its withdrawal from the
          contract to Neubau. The deadline is met if The Customer sends back the
          goods before the period of 14 days has expired. The Customer will have
          to bear the direct cost of returning the goods. The Customer is only
          liable for any diminished value of the goods resulting from the
          handling other than what is necessary to establish the nature,
          characteristics and functioning of the goods.
          <br />
          (2) Personalized/Customized products as well as goods on disks where
          the license seal is destroyed are excluded from the right to
          withdrawal.
          <br />
          <br />
          § 4 Third Party Content
          <br />
          <br />
          Neubau shall not be liable for content in guest books, discussion
          forums and chats which are provided by third parties (“Third Party
          Content”). Any of such Third Party Content does not necessarily
          represent the opinions, beliefs, or positions of Neubau. Please notify
          Neubau to abc[at]neubauladen.com of any illegal or offensive Third
          Party Content.
          <br />
          <br />
          § 5 Privacy Policy/Data Protection
          <br />
          <br />
          Neubau may save and process any data relating to the Customer, to the
          extent necessary for the purpose of the execution and implementation
          of the contracts and as long as Neubau is required to keep such data
          in accordance with applicable law. Neubau shall not make available any
          personal data of the Customer to other third parties without the
          express consent of the Customer, except to the extent that a
          disclosure is required under applicable law.
          <br />
          <br />
          Copyright © 2015-2018 HAHA studio (hahastudio.se)
          <br />
          All Rights Reserved.
        </div>
        <ShopNavigation />
      </div>
    </Layout>
  </React.Fragment>
)

TermsAndLicenses.proptypes = {
  location: PropTypes.object.isRequired,
}

export default TermsAndLicenses
