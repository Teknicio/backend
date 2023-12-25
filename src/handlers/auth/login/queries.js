module.exports = {
  // check partner referral code
  check_partner_referral_code(referral_code) {
    return `SELECT EXISTS (SELECT * FROM partners WHERE referral_code="${referral_code}") as exist;`;
  },

  // check user and partner mapping
  check_user_and_partner_mapping(partner_referral_code, user_name, password) {
    return `SELECT EXISTS (SELECT * FROM partner_users WHERE partner_referral_code="${partner_referral_code}" AND user_name="${user_name}" AND password="${password}") as exist;`;
  },
};
