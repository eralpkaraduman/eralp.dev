# eralpkaraduman.com → eralp.dev Redirect Plan

## Goal
Redirect all web traffic from eralpkaraduman.com to eralp.dev while preserving email functionality.

## DNS Records to KEEP (do not touch)
- **MX** eralpkaraduman.com → mx01.mail.icloud.com (priority 10)
- **MX** eralpkaraduman.com → mx02.mail.icloud.com (priority 10)
- **TXT** eralpkaraduman.com → "v=spf1 include:_spf.google.com include:icloud.com ~all"
- **TXT** eralpkaraduman.com → "apple-domain=FuV7yeDr92tnpIqj"
- **TXT** eralpkaraduman.com → "brave-ledger-verification=..."
- **TXT** eralpkaraduman.com → "keybase-site-verification=..."
- **CNAME** sig1._domainkey... (DKIM for email)

## DNS Records to KEEP but may change
- **A** eralpkaraduman.com → Cloudflare proxied IPs (needed for redirect rule to work)

## Steps

### Step 1: Add redirect rule in Cloudflare dashboard
- Go to eralpkaraduman.com zone → Rules → Redirect Rules → Create Rule
- Rule name: "Redirect to eralp.dev"
- When: Hostname equals "eralpkaraduman.com"
- URL redirect: Dynamic → concat("https://eralp.dev", http.request.uri.path)
- Status code: 301
- Preserve query string: on

### Step 2: Verify redirect works
- Test: curl -I https://eralpkaraduman.com
- Expected: 301 redirect to https://eralp.dev
- If the old site still shows (tunnel intercepting), proceed to step 3

### Step 3: Remove tunnel routes (only if step 2 shows old site)
- Go to Zero Trust → Tunnels → cicex1 → Published application routes
- Remove row 9: www.eralpkaraduman.com
- Remove row 10: eralpkaraduman.com
- DO NOT touch any other routes

### Step 4: Verify email still works
- Send a test email to your @eralpkaraduman.com address
- Confirm it arrives

### Step 5: Add www redirect (optional)
- Add DNS record: www CNAME → eralpkaraduman.com (proxied)
- The redirect rule will catch it too if you change "When" to:
  Hostname equals "eralpkaraduman.com" OR Hostname equals "www.eralpkaraduman.com"
