

GetRepositories=function(Username){
	var Data;
	$.ajax({
		"url":`https://api.github.com/users/${Username}/repos`,
		"type":"GET",
		"dataType":"JSON",
		"async":false,
		"success":function(Data_){
			Data=Data_;
		},
	});
	return Data;
};


