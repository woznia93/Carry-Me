import requests
import os
from dotenv import load_dotenv

load_dotenv()
TRACKER_API_KEY = os.getenv("da709182-aba5-4e9f-be46-28f0800a8ece")

def fetch_tracker_data(tracker_gg_id):
    url = f"https://public-api.tracker.gg/v2/valorant/standard/profile/riot/{tracker_gg_id}"
    headers = {"TRN-Api-Key": TRACKER_API_KEY}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        data = response.json()
        return {
            "rank": data["data"]["segments"][0]["stats"]["rank"]["metadata"]["tierName"]
        }
    return None
