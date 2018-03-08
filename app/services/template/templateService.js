/**
 * Created by Pawan on 5/24/2017.
 */
/**
 * Created by Veery Team on 9/8/2016.
 */

agentApp.factory("templateService", function ($http, baseUrls, authService) {


    var getMyChatTemplates = function () {
        return $http({
            method: 'get',
            url: baseUrls.templateUrl + "TemplateService/MyChatTemplates"
        }).then(function (response) {
            if (response.data && response.data.IsSuccess) {
                return response.data.Result;
            } else {
                return undefined;
            }
        });
    };
    var getAvailableChatTemplates = function () {
        return $http({
            method: 'get',
            url: baseUrls.templateUrl + "TemplateService/AvailableChatTemplates"
        }).then(function (response) {
            if (response.data && response.data.IsSuccess) {
                return response.data.Result;
            } else {
                return undefined;
            }
        });
    };
    var addNewChatTemplate = function (saveValues) {

        return $http({
            method: 'POST',
            url: baseUrls.templateUrl + "TemplateService/ChatTemplate",
            data: JSON.stringify(saveValues)
        }).then(function (response) {
            if (response.data && response.data.IsSuccess) {
                return response.data.Result;
            } else {
                return undefined;
            }
        });

    };
    var RemoveChatTemplate = function (tempID) {

        return $http({
            method: 'DELETE',
            url: baseUrls.templateUrl + "TemplateService/ChatTemplate/"+tempID
        }).then(function (response) {
            if (response.data && response.data.IsSuccess) {
                return response.data.Result;
            } else {
                return undefined;
            }
        });

    };
    var getTemplatesByType = function () {
        return $http({
            method: 'get',
            url: baseUrls.templateUrl + "/RenderService/TemplateByType/text"
        }).then(function (response) {
            if (response.data && response.data.IsSuccess) {
                return response.data.Result;
            } else {
                return undefined;
            }
        });
    }



    return {
        getMyChatTemplates: getMyChatTemplates,
        addNewChatTemplate: addNewChatTemplate,
        RemoveChatTemplate: RemoveChatTemplate,
        getAvailableChatTemplates: getAvailableChatTemplates,
        getTemplatesByType: getTemplatesByType
    }
});

