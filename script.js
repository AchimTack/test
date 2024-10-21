const API_KEY = "AIzaSyBj5zfC9KuQwBmICZFDoL3hX_MxRvw73ec"
const API_URL = "https://areainsights.googleapis.com/v1:computeInsights"
const SF_PLACE_IDS = {
  10115: "ChIJSwrO4exRqEcRkNA9lUkgIRw",
  10117: "ChIJ-QcxXsNRqEcRUPc_lUkgIRw",
  10119: "ChIJE4Y3E-NRqEcR0M49lUkgIRw",
  10178: "ChIJ85n72yFOqEcRIM89lUkgIRw",
  10179: "ChIJV-na7iROqEcR4NU9lUkgIRw",
  10243: "ChIJ7c5uM0FOqEcRAM89lUkgIRw",
  10245: "ChIJFax-tvtOqEcREM89lUkgIRw",
  10247: "ChIJB-81FmBOqEcRAPs_lUkgIRw",
  10249: "ChIJZyEaSxNOqEcR4M49lUkgIRw",
  10315: "ChIJE2aVRrBOqEcRQPs_lUkgIRw",
  10317: "ChIJM0ZnHN1OqEcR0OY9lUkgIRw",
  10318: "ChIJg8dcg9dIqEcR8Pg_lUkgIRw",
  10319: "ChIJV1gzCM1OqEcRwOY9lUkgIRw",
  10365: "ChIJaQeicpdOqEcR8OY9lUkgIRw",
  10367: "ChIJtSTXX49OqEcRUOc9lUkgIRw",
  10369: "ChIJg-9sx35OqEcRsPQ_lUkgIRw",
  10405: "ChIJ9zucJgROqEcRgM49lUkgIRw",
  10407: "ChIJFWHEwHROqEcRcM49lUkgIRw",
  10409: "ChIJ05AATuFNqEcR4Ps_lUkgIRw",
  10435: "ChIJhZ7_d_5RqEcRwM49lUkgIRw",
  10437: "ChIJ2fP3aQFSqEcRsM49lUkgIRw",
  10439: "ChIJqSmIuAVSqEcR8Ps_lUkgIRw",
  10551: "ChIJQQmUwXJRqEcRkM89lUkgIRw",
  10553: "ChIJte9_DhVRqEcRcNc9lUkgIRw",
  10555: "ChIJc_IiHw9RqEcRwM89lUkgIRw",
  10557: "ChIJNyDzE6JRqEcRYM89lUkgIRw",
  10559: "ChIJf8nQSZ5RqEcRgM89lUkgIRw",
  10585: "ChIJ0SjCLyJRqEcR4NY9lUkgIRw",
  10587: "ChIJ73eirhlRqEcR8No9lUkgIRw",
  10589: "ChIJRbn2eDlRqEcRQNc9lUkgIRw",
  10623: "ChIJXZagDgJRqEcRkNY9lUkgIRw",
  10625: "ChIJzyU55uFQqEcR0NY9lUkgIRw",
  10627: "ChIJbdp3-d5QqEcRwNY9lUkgIRw",
  10629: "ChIJE9VLAOdQqEcRYNc9lUkgIRw",
  10707: "ChIJJ3YDXO5QqEcR4Nw9lUkgIRw",
  10709: "ChIJXYyLM-pQqEcRAN49lUkgIRw",
  10711: "ChIJuzb6NsRQqEcRYNw9lUkgIRw",
  10713: "ChIJcZicbJJQqEcRMNw9lUkgIRw",
  10715: "ChIJYWg6vGFQqEcRINw9lUkgIRw",
  10717: "ChIJJXpPwPVQqEcRkNw9lUkgIRw",
  10719: "ChIJM8u67_lQqEcRsNw9lUkgIRw",
  10777: "ChIJwxXZw1BQqEcRQNs9lUkgIRw",
  10779: "ChIJGQeh41tQqEcRsNs9lUkgIRw",
  10781: "ChIJz_PLw0VQqEcRANw9lUkgIRw",
  10783: "ChIJfz89SkhQqEcRMNs9lUkgIRw",
  10785: "ChIJhdEeXLRRqEcRQPc_lUkgIRw",
  10787: "ChIJI6dYNKtRqEcRIN89lUkgIRw",
  10789: "ChIJh_FfL1RQqEcRcN89lUkgIRw",
  10823: "ChIJdc72mEFQqEcRgN89lUkgIRw",
  10825: "ChIJ9zLZdmhQqEcR0N89lUkgIRw",
  10827: "ChIJuc8RmmpQqEcR4N89lUkgIRw",
  10829: "ChIJ84Wg_hRQqEcRINs9lUkgIRw",
  10961: "ChIJu3ChvdZPqEcRoNM9lUkgIRw",
  10963: "ChIJMdG0XzJQqEcRoPU_lUkgIRw",
  10965: "ChIJLWVmFdlPqEcR8OM9lUkgIRw",
  10967: "ChIJX_eNMslPqEcRANQ9lUkgIRw",
  10969: "ChIJQXxZ_ypOqEcR4PU_lUkgIRw",
  10997: "ChIJp08Zqk5OqEcRkNM9lUkgIRw",
  10999: "ChIJP7wSxEpOqEcRAOQ9lUkgIRw",
  12043: "ChIJn7GCj6RPqEcRYOM9lUkgIRw",
  12045: "ChIJG9AunK9PqEcR4OM9lUkgIRw",
  12047: "ChIJG-N9mrZPqEcRQPk_lUkgIRw",
  12049: "ChIJS7wg_75PqEcRgOM9lUkgIRw",
  12051: "ChIJBadq-ZpPqEcRwOM9lUkgIRw",
  12053: "ChIJHw2XL6NPqEcRYOU9lUkgIRw",
  12055: "ChIJldEE03RPqEcRcOU9lUkgIRw",
  12057: "ChIJx1JiqRJPqEcRQOM9lUkgIRw",
  12059: "ChIJMZPqKQhPqEcRcOM9lUkgIRw",
  12099: "ChIJW8mHgvRPqEcRIPg_lUkgIRw",
  12101: "ChIJ81rtTeFPqEcRMNQ9lUkgIRw",
  12103: "ChIJsyq5PQFQqEcR4Ns9lUkgIRw",
  12105: "ChIJkWM-vlJFqEcRMPk_lUkgIRw",
  12107: "ChIJmdxdBDxFqEcRgNU9lUkgIRw",
  12109: "ChIJY_gM00JFqEcR0NM9lUkgIRw",
  12157: "ChIJvU6lAXVQqEcRIOA9lUkgIRw",
  12159: "ChIJx9u6cHBQqEcRwN49lUkgIRw",
  12161: "ChIJO8tS-ntQqEcRAOA9lUkgIRw",
  12163: "ChIJYbCia4FaqEcR0Pc_lUkgIRw",
  12165: "ChIJzZsyeYhaqEcRMOA9lUkgIRw",
  12167: "ChIJP0BdipZaqEcRUOA9lUkgIRw",
  12169: "ChIJEUXbcphaqEcREOI9lUkgIRw",
  12203: "ChIJkYqZCPVaqEcRYOA9lUkgIRw",
  12205: "ChIJU6itz1ZaqEcRcOA9lUkgIRw",
  12207: "ChIJl4xMIx1bqEcRgOA9lUkgIRw",
  12209: "ChIJM5qVUiBbqEcRsOA9lUkgIRw",
  12247: "ChIJfcsbD8daqEcRQOA9lUkgIRw",
  12249: "ChIJcUoL49NaqEcREOA9lUkgIRw",
  12277: "ChIJPRn2VNlEqEcRkPk_lUkgIRw",
  12279: "ChIJoVK6I9NEqEcRsPk_lUkgIRw",
  12305: "ChIJuXMQWvdEqEcREPg_lUkgIRw",
  12307: "ChIJRXsWPYxEqEcRgNQ9lUkgIRw",
  12309: "ChIJwbE_X1xEqEcRsNM9lUkgIRw",
  12347: "ChIJhX5Jun9FqEcRgPc_lUkgIRw",
  12349: "ChIJqapehglFqEcRMPc_lUkgIRw",
  12351: "ChIJswO9spRFqEcRAOU9lUkgIRw",
  12353: "ChIJ4-Ns-cNFqEcRoOQ9lUkgIRw",
  12355: "ChIJceOGUmRGqEcRUOQ9lUkgIRw",
  12357: "ChIJORGQnQ5GqEcRUOU9lUkgIRw",
  12359: "ChIJT4eRD2JPqEcRsOI9lUkgIRw",
  12435: "ChIJr6Gr0gRPqEcR8PU_lUkgIRw",
  12437: "ChIJy6QM_kNPqEcRIOM9lUkgIRw",
  12459: "ChIJYR_W8sFIqEcR8Po_lUkgIRw",
  12487: "ChIJjU_79adIqEcRoOI9lUkgIRw",
  12489: "ChIJnRA2iihGqEcRIPk_lUkgIRw",
  12524: "ChIJ70vU6bNHqEcRkPg_lUkgIRw",
  12526: "ChIJPULIqJhHqEcRoPg_lUkgIRw",
  12527: "ChIJ-5mywf84qEcRAPg_lUkgIRw",
  12555: "ChIJA-ictl1IqEcRkPs_lUkgIRw",
  12557: "ChIJcyzJDORHqEcR4OU9lUkgIRw",
  12559: "ChIJy0PU1jE4qEcRwOU9lUkgIRw",
  12587: "ChIJ5UQvAts3qEcREOY9lUkgIRw",
  12589: "ChIJaahoTRU3qEcR8OU9lUkgIRw",
  12619: "ChIJLcgJVdRLqEcRcOs9lUkgIRw",
  12621: "ChIJ9X5U2ZhJqEcR4Pg_lUkgIRw",
  12623: "ChIJLw_owMFJqEcR0Pg_lUkgIRw",
  12627: "ChIJzW9QDTdKqEcRYOs9lUkgIRw",
  12629: "ChIJPx5nU8hLqEcRUOs9lUkgIRw",
  12679: "ChIJcQDK6pJLqEcR4Oo9lUkgIRw",
  12681: "ChIJQwDc7PBLqEcR4P4_lUkgIRw",
  12683: "ChIJlW5ORWtJqEcREOs9lUkgIRw",
  12685: "ChIJ4yY0wu5LqEcRAOs9lUkgIRw",
  12687: "ChIJcXOzD5BLqEcR0Oo9lUkgIRw",
  12689: "ChIJ91Ciq4RLqEcR4Po_lUkgIRw",
  13051: "ChIJp0osIwBNqEcRQPw_lUkgIRw",
  13053: "ChIJL7yu1jlMqEcRcOY9lUkgIRw",
  13055: "ChIJS0KtcCVMqEcRQOc9lUkgIRw",
  13057: "ChIJDYxuBohMqEcRYOc9lUkgIRw",
  13059: "ChIJ8wMadfNMqEcR4ANAlUkgIRw",
  13086: "ChIJ9RRDlHVSqEcRLYXz85iJuJk",
  13088: "ChIJaeK_z7lNqEcRoPo_lUkgIRw",
  13089: "ChIJG1h_n49NqEcRUOo9lUkgIRw",
  13125: "ChIJwVbmaLCyqUcRUOk9lUkgIRw",
  13127: "ChIJo0QCM7pSqEcRgOk9lUkgIRw",
  13129: "ChIJudXo62VNqEcRMANAlUkgIRw",
  13156: "ChIJiWedBFxSqEcRwOk9lUkgIRw",
  13158: "ChIJiwQYUP9SqEcRgPo_lUkgIRw",
  13159: "ChIJETkhatZSqEcRcOk9lUkgIRw",
  13187: "ChIJu-4UqG5SqEcRQOk9lUkgIRw",
  13189: "ChIJryM4lHNSqEcR4PQ_lUkgIRw",
  13347: "ChIJndq-BypSqEcRANE9lUkgIRw",
  13349: "ChIJ187wiNBTqEcRMPo_lUkgIRw",
  13351: "ChIJK3ilMWBRqEcRINE9lUkgIRw",
  13353: "ChIJgb5EFHlRqEcRcPc_lUkgIRw",
  13355: "ChIJd66e__RRqEcRYNA9lUkgIRw",
  13357: "ChIJof_vMCFSqEcRQNA9lUkgIRw",
  13359: "ChIJmQcTETpSqEcRYPo_lUkgIRw",
  13403: "ChIJie23KY1TqEcRwOg9lUkgIRw",
  13405: "ChIJR1a1egFUqEcRYPc_lUkgIRw",
  13407: "ChIJT6lTQLhTqEcR8Og9lUkgIRw",
  13409: "ChIJP0tWwjVSqEcRkPU_lUkgIRw",
  13435: "ChIJGxIEn3FTqEcRMOg9lUkgIRw",
  13437: "ChIJGbfkqYNTqEcREOg9lUkgIRw",
  13439: "ChIJ40ZZ-AxTqEcREPw_lUkgIRw",
  13465: "ChIJyURRuNRUqEcRkOc9lUkgIRw",
  13467: "ChIJS1MwsexUqEcRgOc9lUkgIRw",
  13469: "ChIJP6QNiGZTqEcRcOc9lUkgIRw",
  13503: "ChIJ_cooqA9VqEcR8Oc9lUkgIRw",
  13505: "ChIJMwVaf8lVqEcRwOc9lUkgIRw",
  13507: "ChIJvV04QD5UqEcRsOc9lUkgIRw",
  13509: "ChIJQZPn2GRUqEcR4Og9lUkgIRw",
  13581: "ChIJKzUiGjJWqEcRwNc9lUkgIRw",
  13583: "ChIJFwKLBSNWqEcRINg9lUkgIRw",
  13585: "ChIJkSeCB2tWqEcRMNg9lUkgIRw",
  13587: "ChIJzbN8s1b_qEcRgNc9lUkgIRw",
  13589: "ChIJ34OnFKb4qEcR4Ng9lUkgIRw",
  13591: "ChIJwdzxnY74qEcRUNg9lUkgIRw",
  13593: "ChIJFSaSXdxXqEcRANk9lUkgIRw",
  13595: "ChIJMdsI87BXqEcRANg9lUkgIRw",
  13597: "ChIJf3pQcVZWqEcR4Nc9lUkgIRw",
  13599: "ChIJD5SvCGJWqEcRUOg9lUkgIRw",
  13627: "ChIJBfISrU5RqEcRYNY9lUkgIRw",
  13629: "ChIJWwSRHrxWqEcRYOg9lUkgIRw",
  14050: "ChIJv0eO5dlWqEcRoNY9lUkgIRw",
  14052: "ChIJDaleiSBXqEcRENk9lUkgIRw",
  14053: "ChIJncrktwJXqEcRkNc9lUkgIRw",
  14193: "ChIJ076ngeNZqEcRgOA_lUkgIRw",
  14057: "ChIJk2ZHqtFQqEcREN49lUkgIRw",
  14059: "ChIJ-_61zS1RqEcRANc9lUkgIRw",
  14089: "ChIJie1Xww9YqEcRoNc9lUkgIRw",
  14109: "ChIJK2qZGcFYqEcRoAFAlUkgIRw",
  14129: "ChIJO4CToQdZqEcR8OA9lUkgIRw",
  14163: "ChIJTSYS54ZZqEcREOE9lUkgIRw",
  14165: "ChIJKSvR09pbqEcRIOE9lUkgIRw",
  14167: "ChIJ1QEahrFbqEcRkOA9lUkgIRw",
  14169: "ChIJ-e1xQD1aqEcR8Pc_lUkgIRw",
  14195: "ChIJv3w-RW1aqEcR4Pc_lUkgIRw",
  14197: "ChIJVYt0a4RQqEcRIPo_lUkgIRw",
  14199: "ChIJD0SWXJhQqEcRYOE9lUkgIRw",
  12439: "ChIJSZzsFr1IqEcRAPk_lUkgIRw",
  14055: "ChIJR6XECj5XqEcRUNw9lUkgIRw",
  15537: "ChIJ8c2Hn7I6qEcRcABAlUkgIRw",
  15566: "ChIJuzpGdvQ2qEcRQPg_lUkgIRw",
  15569: "ChIJSxW0XtowqEcRAPY_lUkgIRw",
}

// Initialize and add the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
  })

  fetchInsightsAndDraw(map)
}

// Function to make a POST request to the API
async function postRequest(url, data, key) {
  try {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": key,
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    console.error("Error in postRequest:", error)
    throw error
  }
}

// Function to fetch insights and draw choropleth on the map
async function fetchInsightsAndDraw(map) {
  const promises = Object.entries(SF_PLACE_IDS).map(([zip, placeId]) => {
    const data = {
      insights: ["INSIGHT_COUNT"],
      filter: {
        location_filter: {
          region: {
            place: `places/${placeId}`,
          },
        },
        type_filter: {
          included_types: [
            "restaurant",
            "convenience_store",
            "liquor_store",
            "bar",
          ],
        },
      },
    }
    return postRequest(API_URL, data, API_KEY)
  })

  try {
    const results = await Promise.all(promises)
    const counts = results.map((result) => parseInt(result.count, 10) || 0)
    const minCount = Math.min(...counts)
    const maxCount = Math.max(...counts)

    // Fetch GeoJSON data and add it to the map
    const response = await fetch(
      "plz.geojson",
    )
    const geoJsonData = await response.json()

    // Add count property to each feature in the GeoJSON data
    geoJsonData.features.forEach((feature) => {
      const zipCode = feature.id
      const countIndex = Object.keys(SF_PLACE_IDS).indexOf(zipCode)
      const count = countIndex !== -1 ? counts[countIndex] : 0
      feature.properties.count = count
    })

    map.data.addGeoJson(geoJsonData)

    // Set style for GeoJSON features
    map.data.setStyle((feature) => {
      const count = feature.getProperty("count")
      return {
        fillColor: getColor(count, minCount, maxCount),
        fillOpacity: 0.6,
        strokeWeight: 1,
      }
    })

    // Create an info window to show the count
    const infoWindow = new google.maps.InfoWindow({
      disableAutoPan: true,
    })

    // Add event listeners for hover
    map.data.addListener("mouseover", (event) => {
      const count = event.feature.getProperty("count")
      const zipCode = event.feature.getProperty("id")
      infoWindow.setContent(`Zip Code: ${zipCode}<br>Count: ${count}`)
      infoWindow.setPosition(event.latLng)
      infoWindow.open(map)
    })

    map.data.addListener("mouseout", () => {
      infoWindow.close()
    })
  } catch (error) {
    console.error("Error fetching insights:", error)
  }
}

// Function to get color based on count with normalized transparency
function getColor(count, minCount, maxCount) {
  const opacity = (count - minCount) / (maxCount - minCount)
  return `rgba(255, 0, 0, ${opacity})` // Red color with varying transparency
}
