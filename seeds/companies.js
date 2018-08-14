exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(() => {
      // Inserts seed entries
      return knex('companies').insert([
        {id: 1, company_name: 'Eli Lilly', sector: 'Health Care', symbol: 'LLY', zip_code: 46285, times_rated: 0, total_rating: 0},
        {id: 2, company_name: 'Exxon Mobil', sector: 'Energy', symbol: 'XOM', zip_code: 75039, times_rated: 0, total_rating: 0},
        {id: 3, company_name: 'Chevron', sector: 'Energy', symbol: 'CVX', zip_code: 94583, times_rated: 0, total_rating: 0},
        {id: 4, company_name: 'Berkshire Hathaway', sector: 'Financials', symbol: 'BRK.B', zip_code: 68131, times_rated: 0, total_rating: 0},
        {id: 5, company_name: 'Apple', sector: 'Information Technology', symbol: 'AAPL', zip_code: 95014, times_rated: 0, total_rating: 0},
        {id: 6, company_name: 'General Motors', sector: 'Consumer Discretionary', symbol: 'GM', zip_code: 48265, times_rated: 0, total_rating: 0},
        {id: 7, company_name: 'Phillips 66', sector: 'Energy', symbol: 'PSX', zip_code: 77042, times_rated: 0, total_rating: 0},
        {id: 8, company_name: 'General Electric', sector: 'Industrials', symbol: 'GE', zip_code: 6828, times_rated: 0, total_rating: 0},
        {id: 9, company_name: 'Ford Motor', sector: 'Consumer Discretionary', symbol: 'F', zip_code: 48126, times_rated: 0, total_rating: 0},
        {id: 10, company_name: 'CVS Health', sector: 'Consumer Staples', symbol: 'CVS', zip_code: 2895, times_rated: 0, total_rating: 0},
        {id: 11, company_name: 'McKesson', sector: 'Health Care', symbol: 'MCK', zip_code: 94104, times_rated: 0, total_rating: 0},
        {id: 12, company_name: 'AT&T', sector: 'Telecommunication Services', symbol: 'T', zip_code: 75202, times_rated: 0, total_rating: 0},
        {id: 13, company_name: 'Valero Energy', sector: 'Energy', symbol: 'VLO', zip_code: 78249, times_rated: 0, total_rating: 0},
        {id: 14, company_name: 'UnitedHealth Group', sector: 'Health Care', symbol: 'UNH', zip_code: 55343, times_rated: 0, total_rating: 0},
        {id: 15, company_name: 'Verizon', sector: 'Telecommunication Services', symbol: 'VZ', zip_code: 10007, times_rated: 0, total_rating: 0},
        {id: 16, company_name: 'AmerisourceBergen', sector: 'Health Care', symbol: 'ABC', zip_code: 19087, times_rated: 0, total_rating: 0},
        {id: 17, company_name: 'Devon Energy', sector: 'Energy', symbol: 'DVN', zip_code: 73102, times_rated: 0, total_rating: 0},
        {id: 18, company_name: 'Costco', sector: 'Consumer Staples', symbol: 'COST', zip_code: 98027, times_rated: 0, total_rating: 0},
        {id: 19, company_name: 'HP', sector: 'Information Technology', symbol: 'HPQ', zip_code: 94304, times_rated: 0, total_rating: 0},
        {id: 20, company_name: 'Kroger', sector: 'Consumer Staples', symbol: 'KR', zip_code: 45202, times_rated: 0, total_rating: 0},
        {id: 21, company_name: 'JP Morgan Chase', sector: 'Financials', symbol: 'JPM', zip_code: 10017, times_rated: 0, total_rating: 0},
        {id: 22, company_name: 'Progressive', sector: 'Financials', symbol: 'PGR', zip_code: 44143, times_rated: 0, total_rating: 0},
        {id: 23, company_name: 'Bank of America Corp.', sector: 'Financials', symbol: 'BAC', zip_code: 28255, times_rated: 0, total_rating: 0},
        {id: 24, company_name: 'IBM', sector: 'Information Technology', symbol: 'IBM', zip_code: 10504, times_rated: 0, total_rating: 0},
        {id: 25, company_name: 'Marathon Petroleum', sector: 'Energy', symbol: 'MPC', zip_code: 45840, times_rated: 0, total_rating: 0},
        {id: 26, company_name: 'Cardinal Health', sector: 'Health Care', symbol: 'CAH', zip_code: 43017, times_rated: 0, total_rating: 0},
        {id: 27, company_name: 'Boeing', sector: 'Industrials', symbol: 'BA', zip_code: 60606, times_rated: 0, total_rating: 0},
        {id: 28, company_name: 'Citigroup', sector: 'Financials', symbol: 'C', zip_code: 10022, times_rated: 0, total_rating: 0},
        {id: 29, company_name: 'Amazon.com', sector: 'Consumer Discretionary', symbol: 'AMZN', zip_code: 98109, times_rated: 0, total_rating: 0},
        {id: 30, company_name: 'Wells Fargo', sector: 'Financials', symbol: 'WFC', zip_code: 94163, times_rated: 0, total_rating: 0},
        {id: 31, company_name: 'Microsoft', sector: 'Information Technology', symbol: 'MSFT', zip_code: 98052, times_rated: 0, total_rating: 0},
        {id: 32, company_name: 'Procter & Gamble', sector: 'Consumer Staples', symbol: 'PG', zip_code: 45202, times_rated: 0, total_rating: 0},
        {id: 33, company_name: 'Home Depot', sector: 'Consumer Discretionary', symbol: 'HD', zip_code: 30339, times_rated: 0, total_rating: 0},
        {id: 34, company_name: 'Archer Daniels Midland', sector: 'Consumer Staples', symbol: 'ADM', zip_code: 62526, times_rated: 0, total_rating: 0},
        {id: 35, company_name: 'Walgreens', sector: 'Consumer Staples', symbol: 'WBA', zip_code: 60015, times_rated: 0, total_rating: 0},
        {id: 36, company_name: 'Target', sector: 'Consumer Discretionary', symbol: 'TGT', zip_code: 55403, times_rated: 0, total_rating: 0},
        {id: 37, company_name: 'Johnson & Johnson', sector: 'Health Care', symbol: 'JNJ', zip_code: 8933, times_rated: 0, total_rating: 0},
        {id: 38, company_name: 'Anthem', sector: 'Health Care', symbol: 'ANTM', zip_code: 46204, times_rated: 0, total_rating: 0},
        {id: 39, company_name: 'MetLife', sector: 'Financials', symbol: 'MET', zip_code: 10166, times_rated: 0, total_rating: 0},
        {id: 40, company_name: 'Google', sector: 'Information Technology', symbol: 'GOOGL', zip_code: 94043, times_rated: 0, total_rating: 0},
        {id: 41, company_name: 'Cummins', sector: 'Industrials', symbol: 'CMI', zip_code: 47201, times_rated: 0, total_rating: 0},
        {id: 42, company_name: "Kohl's", sector: 'Consumer Discretionary', symbol: 'KSS', zip_code: 53051, times_rated: 0, total_rating: 0},
        {id: 43, company_name: 'Comcast', sector: 'Consumer Discretionary', symbol: 'CMCSA', zip_code: 19103, times_rated: 0, total_rating: 0},
        {id: 44, company_name: 'PepsiCo', sector: 'Consumer Staples', symbol: 'PEP', zip_code: 10577, times_rated: 0, total_rating: 0},
        {id: 45, company_name: 'United Technologies', sector: 'Industrials', symbol: 'UTX', zip_code: 6101, times_rated: 0, total_rating: 0},
        {id: 46, company_name: 'AIG', sector: 'Financials', symbol: 'AIG', zip_code: 10038, times_rated: 0, total_rating: 0},
        {id: 47, company_name: 'UPS', sector: 'Industrials', symbol: 'UPS', zip_code: 30328, times_rated: 0, total_rating: 0},
        {id: 48, company_name: 'Dollar General', sector: 'Consumer Discretionary', symbol: 'DG', zip_code: 37072, times_rated: 0, total_rating: 0},
        {id: 49, company_name: 'Aetna', sector: 'Health Care', symbol: 'AET', zip_code: 6156, times_rated: 0, total_rating: 0},
        {id: 50, company_name: "Lowe's", sector: 'Consumer Discretionary', symbol: 'LOW', zip_code: 28117, times_rated: 0, total_rating: 0},
        {id: 51, company_name: 'ConocoPhillips', sector: 'Energy', symbol: 'COP', zip_code: 77079, times_rated: 0, total_rating: 0},
        {id: 52, company_name: 'Intel', sector: 'Information Technology', symbol: 'INTC', zip_code: 95054, times_rated: 0, total_rating: 0},
        {id: 53, company_name: 'Hartford Financial Services Gro', sector: 'Financials', symbol: 'HIG', zip_code: 6155, times_rated: 0, total_rating: 0},
        {id: 54, company_name: 'Caterpillar', sector: 'Industrials', symbol: 'CAT', zip_code: 61629, times_rated: 0, total_rating: 0},
        {id: 55, company_name: 'Prudential Financial', sector: 'Financials', symbol: 'PRU', zip_code: 7102, times_rated: 0, total_rating: 0},
        {id: 56, company_name: 'Pfizer', sector: 'Health Care', symbol: 'PFE', zip_code: 10017, times_rated: 0, total_rating: 0},
        {id: 57, company_name: 'Disney', sector: 'Consumer Discretionary', symbol: 'DIS', zip_code: 91521, times_rated: 0, total_rating: 0},
        {id: 58, company_name: 'Humana', sector: 'Health Care', symbol: 'HUM', zip_code: 40202, times_rated: 0, total_rating: 0},
        {id: 59, company_name: 'Southwest Airlines', sector: 'Industrials', symbol: 'LUV', zip_code: 75235, times_rated: 0, total_rating: 0},
        {id: 60, company_name: 'Cisco Systems', sector: 'Information Technology', symbol: 'CSCO', zip_code: 95134, times_rated: 0, total_rating: 0},
        {id: 61, company_name: 'Sysco', sector: 'Consumer Staples', symbol: 'SYY', zip_code: 77077, times_rated: 0, total_rating: 0},
        {id: 62, company_name: 'Anadarko Petroleum', sector: 'Energy', symbol: 'APC', zip_code: 77380, times_rated: 0, total_rating: 0},
        {id: 63, company_name: 'Coca-Cola', sector: 'Consumer Staples', symbol: 'KO', zip_code: 30313, times_rated: 0, total_rating: 0},
        {id: 64, company_name: 'Lockheed Martin', sector: 'Industrials', symbol: 'LMT', zip_code: 20817, times_rated: 0, total_rating: 0},
        {id: 65, company_name: 'FedEx', sector: 'Industrials', symbol: 'FDX', zip_code: 38120, times_rated: 0, total_rating: 0},
        {id: 66, company_name: 'Johnson Controls', sector: 'Industrials', symbol: 'JCI', zip_code: 53209, times_rated: 0, total_rating: 0},
        {id: 67, company_name: 'Southern', sector: 'Utilities', symbol: 'SO', zip_code: 30308, times_rated: 0, total_rating: 0},
        {id: 68, company_name: 'Kraft Heinz Co', sector: 'Consumer Staples', symbol: 'KHC', zip_code: 60093, times_rated: 0, total_rating: 0},
        {id: 69, company_name: 'Goodyear Tire & Rubber', sector: 'Consumer Discretionary', symbol: 'GT', zip_code: 44316, times_rated: 0, total_rating: 0},
        {id: 70, company_name: 'American Airlines Group', sector: 'Industrials', symbol: 'AAL', zip_code: 76155, times_rated: 0, total_rating: 0},
        {id: 71, company_name: 'Merck', sector: 'Health Care', symbol: 'MRK', zip_code: 8889, times_rated: 0, total_rating: 0},
        {id: 72, company_name: 'Best Buy', sector: 'Consumer Discretionary', symbol: 'BBY', zip_code: 55423, times_rated: 0, total_rating: 0},
        {id: 73, company_name: 'Delta Air Lines', sector: 'Industrials', symbol: 'DAL', zip_code: 30354, times_rated: 0, total_rating: 0},
        {id: 74, company_name: 'Honeywell International', sector: 'Industrials', symbol: 'HON', zip_code: 7962, times_rated: 0, total_rating: 0},
        {id: 75, company_name: 'HCA Holdings', sector: 'Health Care', symbol: 'HCA', zip_code: 37203, times_rated: 0, total_rating: 0},
        {id: 76, company_name: 'Goldman Sachs Group', sector: 'Financials', symbol: 'GS', zip_code: 10282, times_rated: 0, total_rating: 0},
        {id: 77, company_name: 'EOG Resources', sector: 'Energy', symbol: 'EOG', zip_code: 77002, times_rated: 0, total_rating: 0},
        {id: 78, company_name: 'CenturyLink', sector: 'Telecommunication Services', symbol: 'CTL', zip_code: 71203, times_rated: 0, total_rating: 0},
        {id: 79, company_name: 'United Continental Holdings', sector: 'Industrials', symbol: 'UAL', zip_code: 60606, times_rated: 0, total_rating: 0},
        {id: 80, company_name: 'Altria Group', sector: 'Consumer Staples', symbol: 'MO', zip_code: 23230, times_rated: 0, total_rating: 0},
        {id: 81, company_name: 'Oracle', sector: 'Information Technology', symbol: 'ORCL', zip_code: 94065, times_rated: 0, total_rating: 0},
        {id: 82, company_name: 'Morgan Stanley', sector: 'Financials', symbol: 'MS', zip_code: 10036, times_rated: 0, total_rating: 0},
        {id: 83, company_name: 'Tyson Foods', sector: 'Consumer Staples', symbol: 'TSN', zip_code: 72762, times_rated: 0, total_rating: 0},
        {id: 84, company_name: 'General Mills', sector: 'Consumer Staples', symbol: 'GIS', zip_code: 55426, times_rated: 0, total_rating: 0},
        {id: 85, company_name: 'eBay', sector: 'Information Technology', symbol: 'EBAY', zip_code: 95125, times_rated: 0, total_rating: 0},
        {id: 86, company_name: 'Deere', sector: 'Industrials', symbol: 'DE', zip_code: 61265, times_rated: 0, total_rating: 0},
        {id: 87, company_name: 'DowDuPont', sector: 'Materials', symbol: 'DWDP', zip_code: 19898, times_rated: 0, total_rating: 0},
        {id: 88, company_name: 'American Express', sector: 'Financials', symbol: 'AXP', zip_code: 10285, times_rated: 0, total_rating: 0},
        {id: 89, company_name: 'Allstate', sector: 'Financials', symbol: 'ALL', zip_code: 60062, times_rated: 0, total_rating: 0},
        {id: 90, company_name: 'AES', sector: 'Utilities', symbol: 'AES', zip_code: 22203, times_rated: 0, total_rating: 0},
        {id: 91, company_name: 'Mondelez International', sector: 'Consumer Staples', symbol: 'MDLZ', zip_code: 60015, times_rated: 0, total_rating: 0},
        {id: 92, company_name: 'Colgate-Palmolive', sector: 'Consumer Staples', symbol: 'CL', zip_code: 10022, times_rated: 0, total_rating: 0},
        {id: 93, company_name: 'Thermo Fisher Scientific', sector: 'Health Care', symbol: 'TMO', zip_code: 2451, times_rated: 0, total_rating: 0},
        {id: 94, company_name: 'PG&E Corp.', sector: 'Utilities', symbol: 'PCG', zip_code: 94105, times_rated: 0, total_rating: 0},
        {id: 95, company_name: 'NextEra Energy', sector: 'Utilities', symbol: 'NEE', zip_code: 33408, times_rated: 0, total_rating: 0},
        {id: 96, company_name: 'Halliburton', sector: 'Energy', symbol: 'HAL', zip_code: 77032, times_rated: 0, total_rating: 0},
        {id: 97, company_name: 'Twenty-First Century Fox', sector: 'Consumer Discretionary', symbol: 'FOX', zip_code: 10036, times_rated: 0, total_rating: 0},
        {id: 98, company_name: '3M Company', sector: 'Industrials', symbol: 'MMM', zip_code: 55144, times_rated: 0, total_rating: 0},
        {id: 99, company_name: 'American Electric Power', sector: 'Utilities', symbol: 'AEP', zip_code: 43215, times_rated: 0, total_rating: 0},
        {id: 100, company_name: 'General Dynamics', sector: 'Industrials', symbol: 'GD', zip_code: 22042, times_rated: 0, total_rating: 0},
        {id: 101, company_name: 'Baxter International', sector: 'Health Care', symbol: 'BAX', zip_code: 60015, times_rated: 0, total_rating: 0},
        {id: 102, company_name: 'Philip Morris International', sector: 'Consumer Staples', symbol: 'PM', zip_code: 10017, times_rated: 0, total_rating: 0},
        {id: 103, company_name: 'TJX Companies', sector: 'Consumer Discretionary', symbol: 'TJX', zip_code: 1701, times_rated: 0, total_rating: 0},
        {id: 104, company_name: 'Time Warner', sector: 'Consumer Discretionary', symbol: 'TWX', zip_code: 10019, times_rated: 0, total_rating: 0},
        {id: 105, company_name: "Macy's", sector: 'Consumer Discretionary', symbol: 'M', zip_code: 45202, times_rated: 0, total_rating: 0},
        {id: 106, company_name: 'Nike', sector: 'Consumer Discretionary', symbol: 'NKE', zip_code: 97005, times_rated: 0, total_rating: 0},
        {id: 107, company_name: 'Centene', sector: 'Health Care', symbol: 'CNC', zip_code: 63105, times_rated: 0, total_rating: 0},
        {id: 108, company_name: 'Starbucks', sector: 'Consumer Discretionary', symbol: 'SBUX', zip_code: 98134, times_rated: 0, total_rating: 0},
        {id: 109, company_name: 'Gap', sector: 'Consumer Discretionary', symbol: 'GPS', zip_code: 94105, times_rated: 0, total_rating: 0},
        {id: 110, company_name: "McDonald's", sector: 'Consumer Discretionary', symbol: 'MCD', zip_code: 60523, times_rated: 0, total_rating: 0},
        {id: 111, company_name: 'Exelon', sector: 'Utilities', symbol: 'EXC', zip_code: 60603, times_rated: 0, total_rating: 0},
        {id: 112, company_name: 'Travelers Cos.', sector: 'Financials', symbol: 'TRV', zip_code: 10017, times_rated: 0, total_rating: 0},
        {id: 113, company_name: 'Bank of New York Mellon Corp.', sector: 'Financials', symbol: 'BK', zip_code: 10286, times_rated: 0, total_rating: 0},
        {id: 114, company_name: 'International Paper', sector: 'Materials', symbol: 'IP', zip_code: 38197, times_rated: 0, total_rating: 0},
        {id: 115, company_name: 'Occidental Petroleum', sector: 'Energy', symbol: 'OXY', zip_code: 90024, times_rated: 0, total_rating: 0},
        {id: 116, company_name: 'Duke Energy', sector: 'Utilities', symbol: 'DUK', zip_code: 28202, times_rated: 0, total_rating: 0},
        {id: 117, company_name: 'Micron Technology', sector: 'Information Technology', symbol: 'MU', zip_code: 83716, times_rated: 0, total_rating: 0},
        {id: 118, company_name: 'Gilead Sciences', sector: 'Health Care', symbol: 'GILD', zip_code: 94404, times_rated: 0, total_rating: 0},
        {id: 119, company_name: 'Baker Hughes', sector: 'Energy', symbol: 'BHGE', zip_code: 77019, times_rated: 0, total_rating: 0},
        {id: 120, company_name: 'Emerson Electric', sector: 'Industrials', symbol: 'EMR', zip_code: 63136, times_rated: 0, total_rating: 0},
        {id: 121, company_name: 'PNC Financial Services', sector: 'Financials', symbol: 'PNC', zip_code: 15222, times_rated: 0, total_rating: 0},
        {id: 122, company_name: 'Kinder Morgan', sector: 'Energy', symbol: 'KMI', zip_code: 77002, times_rated: 0, total_rating: 0},
        {id: 123, company_name: 'Union Pacific', sector: 'Industrials', symbol: 'UNP', zip_code: 68179, times_rated: 0, total_rating: 0},
        {id: 124, company_name: 'Northrop Grumman', sector: 'Industrials', symbol: 'NOC', zip_code: 22042, times_rated: 0, total_rating: 0},
        {id: 125, company_name: 'Bristol-Myers Squibb', sector: 'Health Care', symbol: 'BMY', zip_code: 10154, times_rated: 0, total_rating: 0},
        {id: 126, company_name: 'Capital One Financial', sector: 'Financials', symbol: 'COF', zip_code: 22102, times_rated: 0, total_rating: 0},
        {id: 127, company_name: 'National Oilwell Varco', sector: 'Energy', symbol: 'NOV', zip_code: 77036, times_rated: 0, total_rating: 0},
        {id: 128, company_name: 'NRG Energy', sector: 'Utilities', symbol: 'NRG', zip_code: 8540, times_rated: 0, total_rating: 0},
        {id: 129, company_name: 'Raytheon', sector: 'Industrials', symbol: 'RTN', zip_code: 2451, times_rated: 0, total_rating: 0},
        {id: 130, company_name: 'Time Warner', sector: 'Consumer Discretionary', symbol: 'TWX', zip_code: 10023, times_rated: 0, total_rating: 0},
        {id: 131, company_name: 'Monsanto', sector: 'Materials', symbol: 'MON', zip_code: 63167, times_rated: 0, total_rating: 0},
        {id: 132, company_name: 'PPG Industries', sector: 'Materials', symbol: 'PPG', zip_code: 15272, times_rated: 0, total_rating: 0},
        {id: 133, company_name: 'Genuine Parts', sector: 'Consumer Discretionary', symbol: 'GPC', zip_code: 30339, times_rated: 0, total_rating: 0},
        {id: 134, company_name: 'Abbott Laboratories', sector: 'Health Care', symbol: 'ABT', zip_code: 60064, times_rated: 0, total_rating: 0},
        {id: 135, company_name: 'Omnicom Group', sector: 'Consumer Discretionary', symbol: 'OMC', zip_code: 10022, times_rated: 0, total_rating: 0},
        {id: 136, company_name: 'Fluor', sector: 'Industrials', symbol: 'FLR', zip_code: 75039, times_rated: 0, total_rating: 0},
        {id: 137, company_name: 'Freeport-McMoRan', sector: 'Materials', symbol: 'FCX', zip_code: 85004, times_rated: 0, total_rating: 0},
        {id: 138, company_name: 'U.S. Bancorp', sector: 'Financials', symbol: 'USB', zip_code: 55402, times_rated: 0, total_rating: 0},
        {id: 139, company_name: 'Nucor', sector: 'Materials', symbol: 'NUE', zip_code: 28211, times_rated: 0, total_rating: 0},
        {id: 140, company_name: 'Kimberly-Clark', sector: 'Consumer Staples', symbol: 'KMB', zip_code: 75038, times_rated: 0, total_rating: 0}
        // {id: 141, company_name: 'Hess', sector: 'Energy', symbol: 'HES', zip_code: 10036, times_rated: 0, total_rating: 0},
        // {id: 142, company_name: 'Chesapeake Energy', sector: 'Energy', symbol: 'CHK', zip_code: 73118, times_rated: 0, total_rating: 0},
        // {id: 143, company_name: 'Xerox', sector: 'Information Technology', symbol: 'XRX', zip_code: 6850, times_rated: 0, total_rating: 0},
        // {id: 144, company_name: 'Illinois Tool Works', sector: 'Industrials', symbol: 'ITW', zip_code: 60026, times_rated: 0, total_rating: 0},
        // {id: 145, company_name: 'Amgen', sector: 'Health Care', symbol: 'AMGN', zip_code: 91320, times_rated: 0, total_rating: 0},
        // {id: 146, company_name: 'AbbVie', sector: 'Health Care', symbol: 'ABBV', zip_code: 60064, times_rated: 0, total_rating: 0},
        // {id: 147, company_name: 'Danaher', sector: 'Health Care', symbol: 'DHR', zip_code: 20037, times_rated: 0, total_rating: 0},
        // {id: 148, company_name: 'Whirlpool', sector: 'Consumer Discretionary', symbol: 'WHR', zip_code: 49022, times_rated: 0, total_rating: 0},
        // {id: 149, company_name: 'Western Digital', sector: 'Information Technology', symbol: 'WDC', zip_code: 92612, times_rated: 0, total_rating: 0},
        // {id: 150, company_name: 'FirstEnergy', sector: 'Utilities', symbol: 'FE', zip_code: 44308, times_rated: 0, total_rating: 0}
      ])
    })
}
