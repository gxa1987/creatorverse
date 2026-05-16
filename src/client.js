import { createClient } from "@supabase/supabase-js";
const URL = 'https://hiusbtkscyqlrxgiasls.supabase.co';
const API_KEY = 'sb_publishable_QUIGzOGaTGB8zJ0k78FtRA_Bhx-qgUI';

// Export 
export const supabase = createClient(URL,API_KEY);
